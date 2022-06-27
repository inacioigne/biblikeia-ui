import { useRouter } from "next/router";

import { useEffect, useState } from "react";

import { api } from "services/solr";

//import LayoutOpac from "opac/layouts/layoutOpac";
import Navbar from "opac/layouts/Navbar";

// Routes
import routes from "routes";
import Image from "next/image";

import LayoutOpac from "opac/layouts/layoutOpac";

import { Container, Grid, Box } from "@mui/material";

import MKTypography from "opac/components/MKTypography";
import MKBox from "opac/components/MKBox";
import MKBadge from "opac/components/MKBadge"


export default function Results() {
  const router = useRouter();
  const { q } = router.query;

  const [results, setResults] = useState(null);

  function getData() {
    const data = { query: "*:*" };
    //const data = { query: `termo_topico:${q}` };

    api
      .post(`acervo/query`, data)
      .then((response) => {
        console.log(response.data.response);
        setResults(response.data.response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
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
        center
      />
      <Container>
        <h1>Results</h1>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <MKBox
              sx={{
                display: "flex",
                backgroundColor: "red",
                height: "10rem",
              }}
            >
              <Box sx={{ p: "10px 10px" }}>
                <Image
                  src="/images/81WcnNQ-TBL.jpg"
                  alt="Picture of the author"
                  width={130}
                  height={180}
                />
              </Box>
              <Box sx={{pt: '10px'}}>
              <MKTypography 
              color="text"
              >
                Big Magic
              </MKTypography>
              <MKTypography 
              variant="h6"
              color="warning"
              >
               por Elizabeth Gilbert
              </MKTypography>
              <MKBadge badgeContent="success" color="success" container />

              </Box>
            </MKBox>
          </Grid>
          <Grid item xs={4}>
          <MKBox
          bgColor={"info"}
          coloredShadow={"warning"}
              sx={{
                display: "flex",
                //backgroundColor: "blue",
                height: "10rem",
              }}
            >
              <Box sx={{ p: "10px 10px" }}>
                <Image
                  src="/images/a8b9ff74ed0f3efd97e09a7a0447f892.jpg"
                  alt="Picture of the author"
                  width={130}
                  height={180}
                />
              </Box>
              <Box sx={{pt: '10px'}}>
              <MKTypography 
              color="text"
              >
                Big Magic
              </MKTypography>
              <MKTypography 
              variant="h6"
              color="warning"
              >
               por Elizabeth Gilbert
              </MKTypography>
              <MKBadge badgeContent="success" color="success" container />

              </Box>
            </MKBox>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                backgroundColor: "brown",
                height: "10rem",
              }}
            >
              BOX3
            </Box>
          </Grid>
        </Grid>
      </Container>

      {results?.docs.map((doc) => (
        <p key={doc.id}>{doc.title}</p>
      ))}
    </>
  );
}

Results.getLayout = function getLayout(page) {
  return <LayoutOpac>{page}</LayoutOpac>;
};
