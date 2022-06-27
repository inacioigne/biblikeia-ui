// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
import GitHubIcon from "@mui/icons-material/GitHub";
import {CoPresent, Grass} from "@mui/icons-material";


const routes = [
  {
    name: "Serviços",
    icon: <CoPresent />,
    collapse: [
      {
        name: 'Ficha catalográfica'

      }
      
    ]
  },
  {
    name: "pages",
    icon: <Icon>dashboard</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "landing pages",
        collapse: [
          {
            name: "about us",
            route: "/pages/landing-pages/about-us",
            //component: <AboutUs />,
          },
        ],
      },
      {
        name: "account",
        collapse: [
          {
            name: "sign in",
            route: "/pages/authentication/sign-in",
            //component: <SignIn />,
          },
        ],
      },
    ],
  },
  {
    name: "INPA",
    icon: <Grass />,
    href: "https://www.gov.br/inpa/pt-br",
   //href: "https://github.com/inacioigne/bibliokeia-ui",
  },
];

export default routes;
