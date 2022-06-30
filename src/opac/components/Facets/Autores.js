import {
    Accordion,
    AccordionSummary,
    Typography,
    AccordionDetails,
    Divider,
    FormControlLabel,
    Checkbox,
    Badge
  } from "@mui/material";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
  
  import { useForm, Controller } from "react-hook-form";
  
  import MKTypography from "opac/components/MKTypography";
  import MKBox from "opac/components/MKBox";
  import MKBadge from "opac/components/MKBadge";
  import MKButton from "opac/components/MKButton";
  
  import { api } from "services/solr";
  
  export default function Authores({ facets, control, setResults, setFacet  }) {
    console.log(facets)
      function getAssunto(assunto) {
          const data = {
            query: `termo_topico:${assunto}`,
            facet: {
              categories: {
                //"type": "terms",
                field: "termo_topico_str",
                //"limit": 3
              },
            },
            limit: 10,
          };
      
          api
            .post(`acervo/query`, data)
            .then((response) => {
              //console.log(response.data.facets.categories.buckets);
              setResults(response.data.response);
              setFacet(response.data.facets.categories.buckets);
            })
            .catch(function (error) {
              console.log(error);
            });
        }
    return (
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Assuntos</Typography>
        </AccordionSummary>
        <Divider sx={{ m: 0, pb: 0 }} />
        <AccordionDetails>
          {/* {facets?.map((facet, index) => (
            <Controller
              key={index}
              name={facet.val}
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{ display: "none" }}
                      onChange={(e) => {
                        field.onChange(e.target.checked);
                        //console.log(e.target.id);
                        getAssunto(e.target.id);
                      }}
                      //checked={field.value}
                      id={facet.val}
                    />
                  }
                  label={
                    <Badge badgeContent={facet.count} color="primary">
                      <MKTypography
                        variant="button"
                        color="info"
                        fontWeight="bold"
                        mr={2}
                      >
                        {facet.val}
                      </MKTypography>
                    </Badge>
                  }
                />
              )}
            />
          ))} */}
        </AccordionDetails>
      </Accordion>
    );
  }