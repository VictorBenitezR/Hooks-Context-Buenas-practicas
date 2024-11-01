import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarInput } from "./validaciones";
const DatosEntrega = (props) => {
  const [address, setAddress] = useState({ value: "", valid: null });
  const [city, setCity] = useState({ value: "", valid: null });
  const [province, setProvince] = useState({ value: "", valid: null });
  //En este en vez de destructurar props (la propiedad), use props, para luego destructurar
  //en la const actualizarPaso, para tener en cuenta que se puede hacer asi, o directo
  //destructurar la propiedad en el parametro que recibe la arrow function (funcion anonima)
  // que seria ({updateStep}, como hicimos en DatosUsuarios y DatosPersonales)
  const actualizarPaso = props.updateStep;
  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        actualizarPaso(3);
        console.log(address, city, province);
      }}
    >
      <TextField
        label="Dirección"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={address.value}
        onChange={(input) => {
          const value = input.target.value;
          const valid = validarInput(value);
          setAddress({ value, valid });
        }}
        error={address.valid === false}
        helperText={address.valid === false && "Ingresa al menos 4 caracteres."}
      />
      <TextField
        label="Ciudad"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={city.value}
        onChange={(input) => {
          const value = input.target.value;
          const valid = validarInput(value);
          setCity({ value, valid });
        }}
        error={city.valid === false}
        helperText={city.valid === false && "Ingresa al menos 4 caracteres."}
      />
      <TextField
        label="Estado/Provincia"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={province.value}
        onChange={(input) => {
          const value = input.target.value;
          const valid = validarInput(value);
          setProvince({ value, valid });
        }}
        error={province.valid === false}
        helperText={
          province.valid === false && "Ingresa al menos 4 caracteres."
        }
      />
      <Button variant="contained" type="submit">
        Crear cuenta
      </Button>
    </Box>
  );
};

export default DatosEntrega;
