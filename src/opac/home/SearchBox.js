import { Paper, IconButton, InputBase, Tooltip } from "@mui/material";
import { Menu, Search } from "@mui/icons-material";

import { useForm, Controller } from "react-hook-form";

import { useRouter } from "next/router";

export default function SearchBox() {
  const router = useRouter();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      search: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    router.push(`/opac/results?q=${data.search}`);
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <Tooltip title="Busca Avançada">
        <IconButton sx={{ p: "10px" }} aria-label="menu">
          <Menu />
        </IconButton>
      </Tooltip>
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
