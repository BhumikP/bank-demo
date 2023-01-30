import React, { useState } from "react";
import { FormControlLabel, Grid, TextField } from "@mui/material";

function CommonCard({
  name,
  visaChecked,
  handleChange,
  allValue,
  setAllValue,
  isDisabled,
}) {
  const [below, setBelow] = useState("");
  const [above, setAbove] = useState("");
  const [brandName, setBrandName] = useState("");

  const handleAddNew = () => {
    if (brandName === "" || below === "" || above === "") {
      alert("Please fill data");
      return;
    }
    setAllValue([
      ...allValue,
      {
        id: allValue.length,
        cardType: name,
        brandName: brandName,
        below: below,
        above: above,
      },
    ]);
  };

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
          <></>
          // <Switch
          //   checked={visaChecked}
          //   onChange={handleChange}
          //   inputProps={{ "aria-label": "controlled" }}
          // />
        }
        label={name}
        style={{ width: "200px" }}
      />
      <Grid item xs={6} sm={2}>
        <TextField
          id="outlined-basic"
          label={`${name} Brand`}
          variant="outlined"
          name="brandName"
          size="small"
          onChange={(e) => setBrandName(e.target.value)}
          disabled={isDisabled}
        />
      </Grid>
      <Grid item xs={6} sm={2}>
        <TextField
          id="outlined-basic"
          label="Slab 0 to 2000"
          name="below"
          variant="outlined"
          size="small"
          onChange={(e) => setBelow(e.target.value)}
          disabled={isDisabled}
        />
      </Grid>
      <Grid item xs={6} sm={2}>
        <TextField
          id="outlined-basic"
          label="2000 to Above"
          name="above"
          variant="outlined"
          size="small"
          onChange={(e) => setAbove(e.target.value)}
          disabled={isDisabled}
        />
      </Grid>
      <div
        className="add-icon"
        onClick={handleAddNew}
        style={isDisabled ? { cursor: "not-allowed" } : {}}
      >
        +
      </div>
    </Grid>
  );
}

export default CommonCard;
