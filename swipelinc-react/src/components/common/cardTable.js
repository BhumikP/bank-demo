import React, { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
} from "@mui/material";
import "./card.css";
import { useFormState } from "../../hooks/useData";
import { merchantCategories } from "../../utils";

function CardTable({ CardName, visaChecked, handleChange }) {
  const [cardCustomType, setCardCustomType] = useState("");
  const [belowRate, setBelowRate] = useState("");
  const [aboveRate, setAboveRate] = useState("");
  const [merchantSelect, setMerchantSelect] = useState("");

  //credit manage
  const [creditBelowRate, setCreditBelowRate] = useState("");
  const [creditAboveRate, setCreditAboveRate] = useState("");
  const [creditMerchantSelect, setCreditMerchantSelect] = useState("");

  const [visaData, setVisaData] = useState([]);

  const { data } = useFormState();

  const addDataToTable = (type) => {
    const data = visaData;
    let newData;
    if (type === "debit") {
      console.log(belowRate);

      if (belowRate === "" || aboveRate === "" || merchantSelect === "") {
        window.alert("Please fill all the details");
        return;
      }
      newData = {
        cardType: "Debit Card",
        upto2000: belowRate,
        above: aboveRate,
        merchant: merchantSelect,
      };
    } else {
      if (
        creditBelowRate === "" ||
        creditAboveRate === "" ||
        creditMerchantSelect === ""
      ) {
        window.alert("Please fill all the details");
        return;
      }
      newData = {
        cardType: "Credit Card",
        upto2000: creditBelowRate,
        above: creditAboveRate,
        merchant: creditMerchantSelect,
      };
    }

    setVisaData([...data, newData]);
    // setBelowRate();
    // setAboveRate();
    // setMerchantSelect();
  };

  const handleCardType = (e) => {
    setCardCustomType(e.target.name);
  };
  return (
    <div>
      <FormControlLabel
        control={
          <Switch
            checked={visaChecked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        label={CardName}
      />
      {visaChecked && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          {" "}
          <FormControlLabel
            control={
              <></>
              // <Switch
              //   checked={cardCustomType === "debit"}
              //   name="debit"
              //   onChange={handleCardType}
              //   inputProps={{ "aria-label": "controlled" }}
              // />
            }
            label="Debit Card"
          />
          <TextField
            id="outlined-basic"
            size="small"
            label="Slab 0 to 2000"
            variant="outlined"
            required
            belowRate={belowRate}
            onChange={(e) => setBelowRate(e.target.value)}
            disabled={!data.toggleData.isDebit}
          />
          <TextField
            id="outlined-basic"
            size="small"
            label="2000 to above"
            variant="outlined"
            required
            aboveRate={aboveRate}
            onChange={(e) => setAboveRate(e.target.value)}
            disabled={!data.toggleData.isDebit}
          />
          <FormControl
            variant={"standard"}
            sx={{ m: 1, minWidth: 230, marginTop: "-6px" }}
            size="small"
          >
            <InputLabel id="demo-select-small">
              Select Merchant Category
            </InputLabel>

            <Select
              labelId="demo-select-small"
              id="merchantSelect"
              name="merchantSelect"
              value={merchantSelect}
              required
              //   disabled={selectedValue !== "Custom"}
              //   label="Select Merchant Category"
              onChange={(e) => setMerchantSelect(e.target.value)}
              disabled={!data.toggleData.isDebit}
            >
              {merchantCategories.map((merchants) => (
                <MenuItem value={merchants.value}>{merchants.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className="add-icon" onClick={() => addDataToTable("debit")}>
            +
          </div>
        </div>
      )}
      {visaChecked && (
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          {" "}
          <FormControlLabel
            control={
              <></>
              // <Switch
              //   checked={cardCustomType === "credit"}
              //   name="credit"
              //   onChange={handleCardType}
              //   inputProps={{ "aria-label": "controlled" }}
              // />
            }
            label="Credit Card"
          />
          <TextField
            id="outlined-basic"
            size="small"
            label="Slab 0 to 2000"
            variant="outlined"
            required
            creditBelowRate={creditBelowRate}
            onChange={(e) => setCreditBelowRate(e.target.value)}
            disabled={!data.toggleData.isCredit}
          />
          <TextField
            id="outlined-basic"
            size="small"
            label="2000 to above"
            variant="outlined"
            required
            creditAboveRate={creditAboveRate}
            onChange={(e) => setCreditAboveRate(e.target.value)}
            disabled={!data.toggleData.isCredit}
          />
          <FormControl
            variant={"standard"}
            sx={{ m: 1, minWidth: 230, marginTop: "-6px" }}
            size="small"
          >
            <InputLabel id="demo-select-small">
              Select Merchant Category
            </InputLabel>

            <Select
              labelId="demo-select-small"
              id="creditMerchantSelect"
              name="creditMerchantSelect"
              value={creditMerchantSelect}
              required
              //   disabled={selectedValue !== "Custom"}
              //   label="Select Merchant Category"
              onChange={(e) => setCreditMerchantSelect(e.target.value)}
              disabled={!data.toggleData.isCredit}
            >
              {merchantCategories.map((merchants) => (
                <MenuItem value={merchants.value}>{merchants.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className="add-icon" onClick={addDataToTable}>
            +
          </div>
        </div>
      )}
      {visaChecked && (
        <table className="table">
          <thead>
            <tr>
              <th>SchemaType</th>
              <th>Card Type</th>
              <th>Upto 2000</th>
              <th>Above 2000</th>
              <th>Merchant Category</th>
            </tr>
          </thead>
          <tbody>
            {visaData.map((data, index) => {
              return (
                <tr key={index}>
                  <td>VISA</td>
                  <td>{data.cardType}</td>
                  <td>{data.upto2000}</td>
                  <td>{data.above}</td>
                  <td>{data.merchant}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CardTable;
