import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import {
  validarApellidos,
  validarNombre,
  validarTelefono,
} from "./validaciones";
const DatosPersonales = (props) => {
  const [name, setName] = useState({ value: "", valid: null });
  const [lastName, setLastname] = useState({ value: "", valid: null });
  const [phone, setPhone] = useState({ value: "", valid: null });
  //En este usamos props, y luego destructuramos directo de props en una const, ahorrando tener que escribir
  //props.updateStep, pero se puede tambien asi, en cada Datos... use distintas formas
  const { updateStep } = props;
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
        updateStep(2);
      }}
    >
      <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={name.value}
        onChange={(input) => {
          const value = input.target.value;
          const valid = validarNombre(value);
          setName({ value, valid });
          console.log(value, valid);
        }}
        error={name.valid === false}
        helperText={name.valid === false && "Ingresa al menos 2 caracteres."}
      />
      <TextField
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={lastName.value}
        onChange={(input) => {
          const value = input.target.value;
          const valid = validarApellidos(value);
          setLastname({ value, valid });
          console.log(value, valid);
        }}
        error={lastName.valid === false}
        helperText={
          lastName.valid === false && "Ingresa al menos 2 caracteres."
        }
      />
      <TextField
        label="Número telefónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="number"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        value={phone.value}
        onChange={(input) => {
          const value = input.target.value;
          const valid = validarTelefono(value);
          setPhone({ value, valid });
          console.log(value, valid);
        }}
        error={phone.valid === false}
        helperText={
          phone.valid === false && "Ingresa un numero de telefono valido."
        }
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosPersonales;
