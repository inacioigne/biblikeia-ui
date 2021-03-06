import MKBox from "opac/components/MKBox";
import MKTypography from "opac/components/MKTypography";
import MKButton from "opac/components/MKButton";

import Image from "next/image";

import {
  Container,
  Grid,
  Box,
  Stack,
  Button,
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
  Divider,
  Avatar,
  CardMedia,
} from "@mui/material";
import { red } from "@mui/material/colors";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Details from "./Details";
import { useState } from "react";

export default function CardResults({
  title,
  author,
  subtitle,
  responsibilities,
  termo_topico,
  year,
  id,
  call,
}) {
  //MODAL
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  L
                </Avatar>
              }
              title={title}
              subheader={subtitle}
            />
            <CardContent>
              {responsibilities && (
                <div>
                  <MKTypography
                    variant="button"
                    color="text"
                    fontWeight="bold"
                    textTransform="uppercase"
                  >
                    Autoria:
                  </MKTypography>

                  <MKTypography variant="body2">
                    {responsibilities}
                  </MKTypography>
                </div>
              )}

              <Box pt={3} sx={{ display: "flex" }}>
                <Box display={{ display: "flex", flexDirection: "column" }}>
                  <MKTypography
                    variant="button"
                    color="text"
                    fontWeight="bold"
                    textTransform="uppercase"
                  >
                    Assuntos:
                  </MKTypography>
                  <Stack direction="row" alignItems="flex-end" spacing={1}>
                    {termo_topico.map((assunto, index) => (
                      <MKButton
                        key={index}
                        size="small"
                        variant="outlined"
                        color="info"
                      >
                        {assunto}
                      </MKButton>
                    ))}
                  </Stack>
                </Box>

                <Box
                  ml={2}
                  display={{ display: "flex", flexDirection: "column" }}
                >
                  <MKTypography
                    variant="button"
                    color="text"
                    fontWeight="bold"
                    textTransform="uppercase"
                  >
                    Ano de publica????o:
                  </MKTypography>
                  <MKTypography
                    variant="h5"
                    color="info"
                    fontWeight="bold"
                    textTransform="uppercase"
                  >
                    {year}
                  </MKTypography>
                </Box>
              </Box>
            </CardContent>
          </Box>
          <Box
            sx={{
              mt: "-15px",
              pr: "20px",
              transition: ".3s ease",
              "&:hover": { transform: "scale(1.03)" },
            }}
          >
            <Image
              src={`http://localhost:8000/cataloguing/item/${id}/imagem`}
              layout="fixed"
              width={130}
              height={180}
            />
          </Box>
        </Box>
        <Divider sx={{ m: 0, pb: 0 }} />
        <CardActions>
          <MKButton size="small" variant="outlined" color="info">
            {`Chamada: ${call}`}
          </MKButton>

          <MKButton
            sx={{ ml: 3, mt: 0 }}
            size="small"
            variant="gradient"
            color="info"
            endIcon={<ArrowForwardIosIcon />}
            onClick={() => {
              setOpen(true);
            }}
          >
            Detalhes
          </MKButton>
        </CardActions>
      </Card>
      <Details open={open} setOpen={setOpen} itemId={id} />
    </>
  );
}
