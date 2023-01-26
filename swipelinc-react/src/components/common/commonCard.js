import React from "react";
import { FormControlLabel, Grid, Switch, TextField } from "@mui/material";

function CommonCard({ name, visaChecked, handleChange }) {
  return (
    <Grid
      container
      spacing={3}
      rowGap={4}
      justifyContent="center"
      alignItems="end"
      marginBottom="20px"
    >
      <FormControlLabel
        control={
          <Switch
            checked={visaChecked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        label={name}
        style={{ width: "200px" }}
      />
      <Grid item xs={6} sm={2}>
        <TextField
          id="outlined-basic"
          label={`${name} Brand`}
          variant="outlined"
          size="small"
        />
      </Grid>
      <Grid item xs={6} sm={2}>
        <TextField
          id="outlined-basic"
          label="Slab 0 to 2000"
          variant="outlined"
          type="number"
          size="small"
        />
      </Grid>
      <Grid item xs={6} sm={2}>
        <TextField
          id="outlined-basic"
          label="2000 to Above"
          variant="outlined"
          type="number"
          size="small"
        />
      </Grid>
    </Grid>
  );
}

export default CommonCard;
