import { Grid, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: "center",
    // color: theme.palette.text.secondary,
  },
}));
function StepOne() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={6} sm={2} className={classes.paper}>
          <TextField
            id="outlined-basic"
            size="small"
            label="Bank Name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} sm={2} className={classes.paper}>
          <TextField
            id="outlined-basic"
            size="small"
            label="Bank Id"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} sm={2} className={classes.paper}>
          <TextField
            id="outlined-basic"
            size="small"
            label="PT. Age"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} sm={2} className={classes.paper}>
          <TextField
            id="outlined-basic"
            size="small"
            label="Terminal Id"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} sm={2} className={classes.paper}>
          <TextField
            id="outlined-basic"
            size="small"
            label="Secret Key"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} sm={2} className={classes.paper}>
          <TextField
            id="outlined-basic"
            size="small"
            label="Salt Key"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={6} sm={2} className={classes.paper}>
          <TextField
            id="outlined-basic"
            size="small"
            label="Merchant Name(Pythru)"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} sm={2} className={classes.paper}>
          <TextField
            id="outlined-basic"
            size="small"
            label="Merchant VPA"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} sm={2} className={classes.paper}>
          <TextField
            id="outlined-basic"
            size="small"
            label="Sub Merchant Id"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} sm={2} className={classes.paper}>
          <TextField
            id="outlined-basic"
            size="small"
            label="MCC code"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} sm={2} className={classes.paper}>
          <TextField
            id="outlined-basic"
            size="small"
            label="EXT TXN id Prifix"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} sm={2} className={classes.paper}>
          <TextField
            id="outlined-basic"
            size="small"
            label="Bank Url"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} sm={2} className={classes.paper}>
          <TextField
            id="outlined-basic"
            size="small"
            label="Bank Id"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} sm={2} className={classes.paper}>
          <TextField
            id="outlined-basic"
            size="small"
            label="Connectivity Type"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} sm={2} className={classes.paper}>
          <TextField
            id="outlined-basic"
            size="small"
            label="Integration Type"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} sm={2} className={classes.paper}>
          <TextField
            id="outlined-basic"
            size="small"
            label="partner id"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} sm={2} className={classes.paper}>
          <TextField
            id="outlined-basic"
            size="small"
            label="website url"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={6} sm={2} className={classes.paper}>
          <TextField
            id="outlined-basic"
            size="small"
            label="Email id"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} sm={2} className={classes.paper}>
          <TextField
            id="outlined-basic"
            size="small"
            label="Contact Details"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} sm={2} className={classes.paper}>
          <TextField
            id="outlined-basic"
            size="small"
            label="Bank Url"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} sm={2} className={classes.paper}>
          <TextField
            id="outlined-basic"
            size="small"
            label="Address Line 1"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} sm={2} className={classes.paper}>
          <TextField
            id="outlined-basic"
            size="small"
            label="Address Line 2"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} sm={2} className={classes.paper}>
          <TextField
            id="outlined-basic"
            size="small"
            label="Pin code"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} sm={2} className={classes.paper}>
          <TextField
            id="outlined-basic"
            size="small"
            label="Support contact"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default StepOne;
