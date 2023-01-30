import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import { useFormDispatch, useFormState } from "../hooks/useData";
import AccordionComponent from "./AccordionComponent";

function FirstStep() {
  const { data } = useFormState() || [];
  const dispatch = useFormDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: "CHANGE_VALUE", name, value });
  };

  const handleNestedChange = (event, mainType) => {
    const { name, checked } = event.target;
    console.log(mainType);
    dispatch({
      type: "CHANGE_NESTED_VALUE",
      name: name,
      value: checked,
      error: undefined,
      mainType: mainType,
    });
  };
  console.log(data);

  const convertToggle = (name) => {
    if (name === "isCard") return "Cards(Debit,Credit)";
    if (name === "isNetBanking") return "Net Banking";
    if (name === "isUpi") return "UPI";
    if (name === "isPrepaidCard") return "Prepaid Card";
    if (name === "isLoyaltyCard") return "Loyalty Card";
    if (name === "isWallet") return "Wallet";

    return name;
  };

  const sourcingMenu = () => {
    if (data.useAsType !== "aggregator") {
      return [
        { name: "Bank", value: "bank" },
        { name: "Processor", value: "processor" },
      ];
    } else {
      return [
        { name: "Aggregator", value: "aggregator" },
        { name: "Master Merchant", value: "masterMerchant" },
      ];
    }
  };

  return (
    <div style={{ display: "inline-grid", gap: "30px" }}>
      <FormControl
        variant={"standard"}
        sx={{ m: 1, minWidth: 120, margin: "auto" }}
        size="small"
      >
        <InputLabel id="demo-select-small">Use as</InputLabel>
        <Select
          labelId="demo-select-small"
          id="useAsType"
          name="useAsType"
          value={data.useAsType}
          label="Use as"
          onChange={handleChange}
        >
          <MenuItem value={"processor"}>Processor</MenuItem>
          <MenuItem value={"aggregator"}>Aggregator</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        variant={"standard"}
        sx={{ m: 1, minWidth: 200, margin: "auto" }}
        size="small"
      >
        <InputLabel id="sourcingChannel">Sourcing Channel</InputLabel>
        <Select
          labelId="sourcingChannel"
          id="sourcingChannel"
          name="sourcingChannel"
          value={data.sourcingChannel}
          disabled={!!!data.useAsType}
          label="Sourcing"
          onChange={handleChange}
        >
          {sourcingMenu()?.map((type) => (
            <MenuItem value={type.value}>{type.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormLabel component="legend">Select Cards (multiple)</FormLabel>
      <FormGroup row style={{ justifyContent: "center" }}>
        {Object.entries(data?.toggleData).map((d) => (
          <FormControlLabel
            key={d}
            control={
              <Checkbox
                checked={d[1]}
                onChange={(e) => handleNestedChange(e, "toggleData")}
                name={d[0]}
              />
            }
            label={convertToggle(d[0])}
          />
        ))}
      </FormGroup>
      <AccordionComponent />
    </div>
  );
}

export default FirstStep;
