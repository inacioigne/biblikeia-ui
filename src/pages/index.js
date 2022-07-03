import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import LayoutOpac from "opac/layouts/layoutOpac";

// Material Kit 2 React components
import MKBox from "opac/components/MKBox";
import MKTypography from "opac/components/MKTypography";

import { Box, Container, Grid, Card } from "@mui/material";

// BiblioKeia components
import SearchBox from "opac/home/SearchBox";
import Counters from "opac/home/Counters";

// Routes
import routes from "routes";

import Navbar from "opac/layouts/Navbar";

export default function Home() {
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
        sticky
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(/images/sedab.jpeg)`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <SearchBox />
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
            rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
      </Card>

   
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <LayoutOpac>{page}</LayoutOpac>;
};
