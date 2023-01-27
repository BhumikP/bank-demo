import { Divider } from "@mui/material";
import React from "react";
import CardTable from "../common/cardTable";
import "./styles.css";

function StepThree() {
  const [visaChecked, setVisaChecked] = React.useState(true);
  const [masterChecked, setMasterChecked] = React.useState(true);
  const [RupayChecked, setRupayChecked] = React.useState(false);

  const handleChange = (event) => {
    setVisaChecked(event.target.checked);
  };
  const handleMasterChange = (event) => {
    setMasterChecked(event.target.checked);
  };
  const handleRupayChange = (event) => {
    setRupayChecked(event.target.checked);
  };

  const [AmexChecked, setAmexChecked] = React.useState(false);

  const handleAmexChange = (event) => {
    setAmexChecked(event.target.checked);
  };
  const [DinnersChecked, setDinnersChecked] = React.useState(false);

  const handleDinnersChange = (event) => {
    setDinnersChecked(event.target.checked);
  };
  return (
    <div>
      <CardTable
        CardName={"VISA"}
        visaChecked={visaChecked}
        handleChange={handleChange}
      />
      <Divider />
      <CardTable
        CardName={"Mater Card"}
        visaChecked={masterChecked}
        handleChange={handleMasterChange}
      />
      <Divider />

      <CardTable
        CardName={"Rupay"}
        visaChecked={RupayChecked}
        handleChange={handleRupayChange}
      />
      <Divider />

      <CardTable
        CardName={"Amex"}
        visaChecked={AmexChecked}
        handleChange={handleAmexChange}
      />
      <Divider />

      <CardTable
        CardName={"Dinners"}
        visaChecked={DinnersChecked}
        handleChange={handleDinnersChange}
      />
    </div>
  );
}

export default StepThree;
