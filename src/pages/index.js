import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import LayoutOpac from "opac/layouts/layoutOpac";

// Material Kit 2 React components
import MKBox from "opac/components/MKBox";
import MKTypography from "opac/components/MKTypography";

import { Box, Container, Grid } from "@mui/material"

// Images
//import bgImage from "assets/images/bg-presentation.jpg";
import SearchBox from "opac/components/SearchBox";


export default function Home() {

  return (
    <>  
    <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
         backgroundImage: `url(/images/biblioteca.jpg)`,
         //backgroundColor: 'red',
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
       <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
          <SearchBox />
            {/* <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              BiblioKeia{" "}
            </MKTypography> */}
          
          </Grid>
        </Container>
   
      </MKBox>
    

    
 <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div> 
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <LayoutOpac>{page}</LayoutOpac>;
};
