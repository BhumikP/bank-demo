import { Grid, TextField } from "@mui/material";
import React from "react";

function StepFour() {
  return (
    <div>
      {" "}
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={6} sm={2}>
          <TextField
            id="outlined-basic"
            label="Bank Name"
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <TextField
            id="outlined-basic"
            label="Merchant category"
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <TextField
            id="outlined-basic"
            label="Slab 0 to 2000"
            variant="outlined"
            size="small"
            type="number"
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <TextField
            id="outlined-basic"
            label="2000 to above"
            variant="outlined"
            size="small"
            type="number"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default StepFour;
