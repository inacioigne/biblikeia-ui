import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Divider,
  FormControlLabel,
  Checkbox,
  Badge,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import MKTypography from "opac/components/MKTypography";

import { useForm, Controller } from "react-hook-form";

import { api } from "services/solr";

export default function Facet({
  name,
  nome,
  field,
  filter,
  facets,
  control,
  setResults,
  setFacetAssunto,
  setFacetAutor,
  setFacetYear,
  getData
}) {   


  return (
    <Accordion defaultExpanded={true}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{name}</Typography>
      </AccordionSummary>
      <Divider sx={{ m: 0, pb: 0 }} />
       <AccordionDetails>
        {facets?.map((facet, index) => (
           <Controller
           key={index}
           name={facet.val.toString()}
           control={control}
           render={({ field }) => (
             <FormControlLabel
               control={
                 <Checkbox
                   sx={{ display: "none" }}
                   onChange={(e) => {
                     field.onChange(e.target.checked);
                     //console.log('F:',filter);                     
                     getData(filter, e.target.id)
                   }}
           
                   id={facet.val.toString()}
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
                     {facet.val.toString()}
                   </MKTypography>
                 </Badge>
               }
             />
           )}
         />
          
           
     

        ))}
      </AccordionDetails> 
    </Accordion>
  );
}
