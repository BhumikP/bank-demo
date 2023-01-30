import { Divider, TextField } from "@mui/material";
import React, { useState } from "react";
import CardTable from "../common/cardTable";
import "./styles.css";

function StepThree() {
  const [visaChecked, setVisaChecked] = useState(true);
  const [masterChecked, setMasterChecked] = useState(true);
  const [RupayChecked, setRupayChecked] = useState(false);
  const [addNewCard, setAddNewCard] = useState("");
  const [dynamicData, setDynamicData] = useState([]);

  const handleChange = (event) => {
    setVisaChecked(event.target.checked);
  };
  const handleMasterChange = (event) => {
    setMasterChecked(event.target.checked);
  };
  const handleRupayChange = (event) => {
    setRupayChecked(event.target.checked);
  };

  const [AmexChecked, setAmexChecked] = useState(false);

  const handleAmexChange = (event) => {
    setAmexChecked(event.target.checked);
  };
  const [DinnersChecked, setDinnersChecked] = useState(false);

  const handleDinnersChange = (event) => {
    setDinnersChecked(event.target.checked);
  };

  const handleAddNew = () => {
    if (addNewCard.trim("") === "") {
      alert("Please add input");
      return;
    }
    const previousData = dynamicData;
    const filterName = dynamicData.map((data) => data?.name);
    if (filterName.includes(addNewCard.trim(""))) {
      return;
    }
    let newField = {
      id: dynamicData.length,
      name: addNewCard,
      checked: false,
    };
    setDynamicData([...previousData, newField]);
  };
  const handleDynamicChange = (data) => {
    const filteredData = dynamicData.filter(
      (content) => content.name === data.name
    );
    if (filteredData[0].checked === true) {
      filteredData[0].checked = false;
    } else {
      filteredData[0].checked = true;
    }
    const newData = dynamicData.map((data) =>
      filteredData.id === data.id ? (data = filteredData) : data
    );
    setDynamicData(newData);
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
      {dynamicData?.length > 0
        ? dynamicData.map((data) => {
            return (
              <>
                <Divider />

                <CardTable
                  id={data.id}
                  CardName={data.name}
                  visaChecked={!!data.checked}
                  handleChange={() => handleDynamicChange(data)}
                />
              </>
            );
          })
        : null}
      <h3>Add new card</h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TextField
          id="outlined-basic"
          size="small"
          label="New Card"
          variant="outlined"
          required
          value={addNewCard}
          onChange={(e) => setAddNewCard(e.target.value)}
          // disabled={data.toggleData.isDebit}
        />
        <div className="add-icon-acc" onClick={handleAddNew}>
          +
        </div>
      </div>
    </div>
  );
}

export default StepThree;
