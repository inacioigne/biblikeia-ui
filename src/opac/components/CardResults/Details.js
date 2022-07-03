import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Box,
} from "@mui/material";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import { api } from "services/api";

import { useEffect, useState } from "react";

import MKTypography from "opac/components/MKTypography";

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
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Box sx={{ display: "flex" }}>
            <MKTypography mr={2}>Autoria:</MKTypography>
            <MKTypography>{item?.datafields["245"].subfields.c}</MKTypography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <MKTypography mr={2}>Publicação:</MKTypography>
            <MKTypography>
            {item?.datafields["260"].subfields.a}
            {item?.datafields["260"].subfields.b}
            {item?.datafields["260"].subfields.c}
            </MKTypography>
          </Box>
         
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
