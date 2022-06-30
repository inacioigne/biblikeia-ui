import { useState } from "react";
import { Paper, Menu, MenuItem, InputBase, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import MKButton from "opac/components/MKButton";
import { ExpandMore } from "@mui/icons-material";

import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/router";

export default function AdvancedSearch( { getData }) {
  const [dropdown, setDropdown] = useState(null);
  const [filter, setFilter] = useState(null);
  const router = useRouter();
  

  const openDropdown = ({ currentTarget }) => {
    setDropdown(currentTarget);
    
  };
  const closeDropdown = ({ currentTarget }) => {
    setDropdown(null);
    setFilter(currentTarget.id);
    //console.log(currentTarget.id)
  };

  const { control, handleSubmit } = useForm({
    defaultValues: {
      search: "",
    },
  });

  const onSubmit = (data) => {
    let field = filter ? filter :"*"
    console.log(field, data);
    //getData(field, assunto);
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <MKButton
        variant="gradient"
        color="info"
        onClick={openDropdown}
        endIcon={<ExpandMore />}
      >
        {filter ? filter : "Geral" }
      </MKButton>
      <Menu
        anchorEl={dropdown}
        open={Boolean(dropdown)}
        onClose={closeDropdown}
      >
        <MenuItem onClick={closeDropdown} id={"Título"}>
          Titulo
        </MenuItem>
        <MenuItem onClick={closeDropdown} id={"Autor"}>
          Autor
        </MenuItem>
        <MenuItem onClick={closeDropdown} id={"Assunto"}>
          Assunto
        </MenuItem>
      </Menu>
      <Controller
        name="search"
        control={control}
        render={({ field }) => (
          <InputBase
            {...field}
            sx={{ ml: 1, flex: 1 }}
            placeholder="Faça uma busca"
            inputProps={{ "aria-label": "search google maps" }}
          />
        )}
      />
      <IconButton
        type="submit"
        sx={{
          p: "10px",
          ":hover": {
            boxShadow: 6,
            color: "blue",
          },
        }}
        aria-label="search"
      >
        <Search />
      </IconButton>
    </Paper>
  );
}
