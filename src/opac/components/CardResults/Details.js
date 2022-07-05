import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Box,
  Typography,
  IconButton,
  Badge,
} from "@mui/material";
import Icon from "@mui/material/Icon";
import {
  AutoStoriesOutlined,
  MapsHomeWorkOutlined,
  Kitchen,
  Language,
} from "@mui/icons-material";

import Image from "next/image";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import { api } from "services/api";

import { useEffect, useState } from "react";

import MKTypography from "opac/components/MKTypography";

import Exemplares from "opac/components/CardResults/Exemplares";

export default function Details({ open, setOpen, itemId }) {
  const [item, setItem] = useState(null);
  

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    setOpen(false);
  };

  const getData = () => {
    api
      .get(`cataloguing/item/${itemId}`)
      .then((response) => {
        console.log("Item: ", response);
        setItem(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
 
      getData();
      console.log('ok')
  
     
  
  }, []);

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      maxWidth={"xl"}
    >
      <DialogTitle id="responsive-dialog-title">
        {item?.datafields["245"].subfields.a}
        {item?.datafields["245"].subfields.b &&
          item?.datafields["245"].subfields.a}
      </DialogTitle>

      <DialogContent dividers>
        <Box sx={{ display: "flex" }}>
          <Image
            src={`http://localhost:8000/cataloguing/item/${itemId}/imagem`}
            alt="Book cover"
            width={150}
            height={200}
          />
           <DialogContentText ml={2}>
           
            <Box component={'span'} sx={{ display: "flex" }}>
              <Typography
                mr={1}
                sx={{ fontWeight: "bold" }}
                variant="subtitle2"
                component={'span'}
              >
                Autoria:
              </Typography>
              <Typography component={'span'} variant="body2">
                {item?.datafields["245"].subfields.c}
              </Typography>
            </Box>
           
            <Box sx={{ display: "flex" }}>
              <Typography
                mr={1}
                sx={{ fontWeight: "bold" }}
                variant="subtitle2"
                component={'span'}
              >
                Publicação:
              </Typography>
              <Typography component={'span'} variant="body2">
                {item?.datafields["260"].subfields.a}
                {item?.datafields["260"].subfields.b}
                {item?.datafields["260"].subfields.c}
              </Typography>
            </Box>
              {/*
            {item?.datafields["490"] && (
              <Box sx={{ display: "flex" }}>
                <Typography
                  mr={1}
                  sx={{ fontWeight: "bold" }}
                  variant="subtitle2"
                >
                  Série:
                </Typography>
                <Typography component={'span'} variant="body2">
                  {item?.datafields["490"].subfields.a}
                  {item?.datafields["490"].subfields.v}
                </Typography>
              </Box>
            )}
            {item?.datafields["500"] && (
              <Box sx={{ display: "flex" }}>
                <Typography
                  mr={1}
                  sx={{ fontWeight: "bold" }}
                  variant="subtitle2"
                  component={'span'}
                >
                  Notas:
                </Typography>
                <Typography component={'span'} variant="body2">
                  {item?.datafields["500"].subfields.a}
                </Typography>
              </Box>
            )}
            <Box sx={{ display: "flex" }}>
              <Typography
                mr={1}
                sx={{ fontWeight: "bold" }}
                variant="subtitle2"
                component={'span'}
              >
                Assuntos:
              </Typography>

              {item?.datafields["650"].map((assunto, index) => (
                <Box
                key={index}
                  sx={{
                    bgcolor: "primary.main",
                    color: "white.main",
                    boxShadow: 1,
                    borderRadius: 2,
                    pl: 1,
                    pr: 1,
                    mr: 1,
                  }}
                >
                  {assunto.subfields.a}
                </Box>
              ))}
            </Box>*/}
          </DialogContentText> 
        </Box>
        <Box sx={{ display: "flex", m: 2, justifyContent: "center" }}>
          <Box
            mr={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="caption">Páginas</Typography>
            <IconButton sx={{ fontSize: "2rem" }}>
              <AutoStoriesOutlined />
            </IconButton>
            <Typography variant="caption">
              {item?.datafields["300"].subfields.a}
            </Typography>
          </Box>
          <Box
            mr={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="caption">Idioma</Typography>
            <IconButton sx={{ fontSize: "2rem" }}>
              <Language />
            </IconButton>
            <Typography variant="caption">Português</Typography>
          </Box>
          <Box
            mr={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="caption">Editora</Typography>
            <IconButton sx={{ fontSize: "2rem" }}>
              <MapsHomeWorkOutlined />
            </IconButton>
            <Typography variant="caption">
              {item?.datafields["260"].subfields.b}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="caption">Estante</Typography>
            <IconButton sx={{ fontSize: "2rem" }}>
              <Kitchen />
            </IconButton>
            <Typography variant="caption">
              {item?.datafields["852"].subfields.c}
            </Typography>
          </Box>
        </Box> 
        <Typography mr={1} sx={{ fontWeight: "bold" }} variant="subtitle2">
          Exemplares:
        </Typography>
        <Exemplares 
        itemId={itemId}
        />
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
