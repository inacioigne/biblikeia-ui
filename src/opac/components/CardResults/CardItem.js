import {
  Card,
  Box,
  CardContent,
  Typography,
  CardMedia,
  Stack,
  CardActions,
  Button,
} from "@mui/material";

import Image from "next/image";

import MKTypography from "opac/components/MKTypography";
import MKButton from "opac/components/MKButton";
import { borderColor, borderRadius } from "@mui/system";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Details from "opac/components/CardResults/Details"
import { useState } from "react";

export default function CardItem({ id, title, author, termo_topico, call }) {
  const [open, setOpen] = useState(false);
  return (
    <>
    <Card sx={{ display: "flex", flexDirection: "row" }}>
      <Box p={"10px 10px 0"}>
        <Image
          src={`http://localhost:8000/cataloguing/item/${id}/imagem`}
          layout="fixed"
          width={130}
          height={180}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardContent>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          {author && (
            <Typography component="div" variant="h6">
              por {author}
            </Typography>
          )}
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
        </CardContent>
        <CardActions>
          <Box
            ml={2}
            pl={1}
            pr={1}
            sx={{
              border: "1px solid",
              borderRadius: "5px",
              borderColor: "primary.main",
            }}
          >
            <MKTypography
              mr={1}
              variant="button"
              color="text"
              fontWeight="bold"
              textTransform="uppercase"
            >
              Chamada:
            </MKTypography>
            <MKTypography
              variant="button"
              color="text"
              //fontWeight="bold"
              textTransform="uppercase"
            >
              {call}
            </MKTypography>
          </Box>
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
      </Box>
    </Card>
     <Details open={open} setOpen={setOpen} itemId={id} />
     </>
  );
}
