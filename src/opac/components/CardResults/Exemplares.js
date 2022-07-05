import { useEffect, useState } from "react";
import { api } from "services/api";
import { styled } from '@mui/material/styles';
import {Table, TableCell, TableRow } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

export default function Exemplares({ itemId }) {
  const [exemplares, setExemplares] = useState(null);

  const getData = () => {
    api
      .get(`cataloguing/exemplar/${itemId}`)
      .then((response) => {
        console.log("Ex: ", response);
        setExemplares(response.data.exemplares);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <p>{itemId}</p>
    
  )
}
