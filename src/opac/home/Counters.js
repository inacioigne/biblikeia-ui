/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import Link from "next/link"

// @mui material components
import {Container, Box} from "@mui/material";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "opac/components/MKBox";

// Material Kit 2 React examples
//import DefaultCounterCard from "opac/layouts/Cards/CounterCards/DefaultCounterCard";
import DefaultCounterCard from "opac/layouts/Cards/CounterCards/DefaultCounterCard"
function Counters() {

  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
          <Box onClick={() => console.log('CLLICOU')} sx={{"cursor": "pointer"}}>

         
       
            <DefaultCounterCard
              count={700}
              suffix="+"
              title="Livros"
              description="Obras de referencia em assuntos amazônicos"              
            />
             </Box>
     
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <DefaultCounterCard
              count={3000}
              suffix="+"
              title="Teses & Dissertações"
              description="Teses & Dissertações defendidas nos Programas de Pós-Graduação do INPA"
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={400}
              suffix="+"
              title="Revistas científicas"
              description="Coleções de revistas científicas em diversas areas"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
