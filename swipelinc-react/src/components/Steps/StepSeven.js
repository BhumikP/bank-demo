import { Button, Grid, TextField, Typography } from "@mui/material";
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
function StepSeven() {
  const classes = useStyles();

  const uploadDocArr = [
    "Address Proof",
    "Aadhar card",
    "Company Pancard",
    "GST Certificate",
    "Additional Fields",
  ];

  return (
    <div style={{ marginBottom: "50px" }}>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={6} sm={2} className={classes.paper}>
          <TextField
            id="outlined-basic"
            size="small"
            label="Name of Business"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} sm={2} className={classes.paper}>
          <TextField
            id="outlined-basic"
            size="small"
            label="Intity Type"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} sm={2} className={classes.paper}>
          <TextField
            id="outlined-basic"
            size="small"
            label="GST Number"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} sm={2} className={classes.paper}>
          <TextField
            id="outlined-basic"
            size="small"
            label="Official Email ID"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} sm={2} className={classes.paper}>
          <TextField
            id="outlined-basic"
            size="small"
            label="Contact Number"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} sm={2} className={classes.paper}>
          <TextField
            id="outlined-basic"
            size="small"
            label="Company Pancard"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={6} sm={2} className={classes.paper}>
          <TextField
            id="outlined-basic"
            size="small"
            label="Director Name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} sm={2} className={classes.paper}>
          <TextField
            id="outlined-basic"
            size="small"
            label="Director Pancard"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} sm={2} className={classes.paper}>
          <TextField
            id="outlined-basic"
            size="small"
            label="Director Aadhar"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} sm={2} className={classes.paper}>
          <TextField
            id="outlined-basic"
            size="small"
            label="Registered Address"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} sm={2} className={classes.paper}>
          <TextField
            id="outlined-basic"
            size="small"
            label="Additional Field"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} sm={2} className={classes.paper}>
          <TextField
            id="outlined-basic"
            size="small"
            label="Additional Field"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} sm={2} className={classes.paper}>
          <TextField
            id="outlined-basic"
            size="small"
            label="Additional Field"
            variant="outlined"
          />
        </Grid>
      </Grid>
      <h3>Upload Documents</h3>
      <div>
        {/* Upload File */}
        {uploadDocArr.map((data) => (
          <>
            <Typography
              as="h4"
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                marginTop: "20px",
                borderTop: "1px solid black",
              }}
            >
              {data}
            </Typography>
            <input id="file-upload" type="file" />
            {/* <hr></hr> */}
          </>
        ))}
      </div>
    </div>
  );
}

export default StepSeven;
