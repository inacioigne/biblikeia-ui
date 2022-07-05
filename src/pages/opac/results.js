import { useRouter } from "next/router";

import { useEffect, useState } from "react";

import { api } from "services/solr";

//import LayoutOpac from "opac/layouts/layoutOpac";
import Navbar from "opac/layouts/Navbar";

// Routes
import routes from "routes";
import Image from "next/image";

import LayoutOpac from "opac/layouts/layoutOpac";

import { useForm, Controller } from "react-hook-form";

import {
  Container,
  Accordion,
  Box,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Button,
  Card,
  Divider,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Badge,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import MKTypography from "opac/components/MKTypography";
import MKBox from "opac/components/MKBox";
import MKBadge from "opac/components/MKBadge";

import CardResults from "opac/components/CardResults";
import Assuntos from "opac/components/Facets/Assuntos";
import Facet from "opac/components/Facets";
import AdvancedSearch from "opac/home/SearchBox/AdvancedSearch";
import CardItem from "opac/components/CardResults/CardItem";

export default function Results() {
  const router = useRouter();
  const { q } = router.query;

  const [results, setResults] = useState(null);
  const [facetAssunto, setFacetAssunto] = useState(null);
  const [facetAutor, setFacetAutor] = useState(null);
  const [facetYear, setFacetYear] = useState(null);

  const { handleSubmit, reset, setValue, control } = useForm();

  const getData = (field, assunto) => {
    const data = {
      query: `${field}:${assunto}`,
      //query: `Ciencia`,
      facet: {
        termo_topico: {
          field: "termo_topico_str",
        },
        author: {
          field: "author_str",
        },
        year: {
          field: "year",
        },
      },
      limit: 10,
    };

    api
      .post(`query`, data)
      .then((response) => {
        //console.log("FT: ", response.data.facets.termo_topico);
        setResults(response.data.response);
        setFacetAssunto(response.data.facets.termo_topico.buckets);
        setFacetAutor(response.data.facets.author.buckets);
        setFacetYear(response.data.facets.year.buckets);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    const field = "*";
    const assunto = "*";
    getData(field, assunto);
  }, []);

  return (
    <>
      <MKBox variant="gradient" bgColor="dark" shadow="sm" py={0.25}>
        <Navbar
          routes={routes}
          action={{
            type: "external",
            route: "https://www.creative-tim.com/product/material-kit-react",
            label: "login",
            color: "info",
          }}
          transparent
          relative
          light
          center
        />
      </MKBox>
      {/* <Container sx={{ flexGrow: 1 }}> */}
      <Container maxWidth="xs" disableGutters={true} >
        <Box sx={{ p: 5, display: "flex", justifyContent: "center" }}>
          <AdvancedSearch getData={getData} />
        </Box>

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
           <Grid item xs={3}>
            
            <Facet
              name="Assuntos"
              filter="termo_topico"
              facets={facetAssunto}
              control={control}
              setFacetAutor={setFacetAutor}
              setFacetYear={setFacetYear}
              setFacetAssunto={setFacetAssunto}
              setResults={setResults}
              getData={getData}
              nome="azul"
            />

            <Facet
              name="Autores"
              filter="author"
              facets={facetAutor}
              control={control}
              setFacetAutor={setFacetAutor}
              setFacetYear={setFacetYear}
              setFacetAssunto={setFacetAssunto}
              setResults={setResults}
              getData={getData}
              nome="amrelo"
            />

            <Facet
              name="Ano"
              filter="year"
              facets={facetYear}
              control={control}
              setFacetAutor={setFacetAutor}
              setFacetYear={setFacetYear}
              setFacetAssunto={setFacetAssunto}
              setResults={setResults}
              getData={getData}
              nome="red"
            />
          </Grid>
          
          

          <Grid
            item
            xs={9}
            sx={{
              display: "grid",
              rowGap: "1rem",
            }}
          >
            {results?.docs.map((doc) => (
          
                <CardItem 
                key={doc.id}
                id={doc.id}
                title={doc.title}
                author={doc.author}
                termo_topico={doc.termo_topico}
                call={doc.call}
                />
              
         
            ))}
          </Grid>
        </Grid> 
      </Container>
    </>
  );
}

Results.getLayout = function getLayout(page) {
  return <LayoutOpac>{page}</LayoutOpac>;
};
