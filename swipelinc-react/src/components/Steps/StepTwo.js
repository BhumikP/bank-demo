import { FormControl, MenuItem, Radio, Select } from "@mui/material";
import React from "react";
import { settlementDropdown } from "../../utils";
import "./styles.css";
function StepTwo() {
  const cardType = ["Instant", "T+1", "T+2", "Custom"];
  const [selectedValue, setSelectedValue] = React.useState({});
  const [cardCustomType, setCardCustomType] = React.useState();

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "all") {
    }
    setSelectedValue({ name: name, value: value });
  };
  console.log(selectedValue);

  return (
    <div>
      <div
        id="card"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Card</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 30px",
          }}
        >
          {cardType.map((card) => {
            return (
              <div
                style={
                  card === "Custom"
                    ? {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }
                    : {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "30px",
                      }
                }
              >
                {card}
                <Radio
                  checked={
                    (selectedValue.name === "card" &&
                      selectedValue.value === card) ||
                    (selectedValue.name === "all" &&
                      selectedValue.value === card)
                  }
                  onChange={handleChange}
                  value={card}
                  name={"card"}
                  inputProps={{ "aria-label": "A" }}
                />
              </div>
            );
          })}
          <FormControl
            variant={"standard"}
            sx={{ m: 1, minWidth: 120 }}
            size="small"
          >
            <Select
              labelId="demo-select-small"
              id="customType"
              name="customType"
              value={cardCustomType}
              disabled={
                selectedValue.value !== "Custom" ||
                selectedValue.name !== "card"
              } //   label="Use as"
              onChange={(e) => setCardCustomType(e.target.value)}
            >
              {settlementDropdown.map((data) => (
                <MenuItem value={data.value}>{data.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
      <div
        id="net-banking"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Net Banking</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 30px",
          }}
        >
          {cardType.map((card) => {
            return (
              <div
                style={
                  card === "Custom"
                    ? {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }
                    : {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "30px",
                      }
                }
              >
                {card}
                <Radio
                  checked={
                    (selectedValue.name === "netBanking" &&
                      selectedValue.value === card) ||
                    (selectedValue.name === "all" &&
                      selectedValue.value === card)
                  }
                  onChange={handleChange}
                  value={card}
                  name="netBanking"
                  inputProps={{ "aria-label": "A" }}
                />
              </div>
            );
          })}
          <FormControl
            variant={"standard"}
            sx={{ m: 1, minWidth: 120 }}
            size="small"
          >
            <Select
              labelId="demo-select-small"
              id="customType"
              name="customType"
              value={cardCustomType}
              disabled={
                selectedValue.value !== "Custom" ||
                selectedValue.name !== "netBanking"
              }
              //   label="Use as"
              onChange={(e) => setCardCustomType(e.target.value)}
            >
              {settlementDropdown.map((data) => (
                <MenuItem value={data.value}>{data.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
      <div
        id="upi"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>UPI</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 30px",
          }}
        >
          {cardType.map((card) => {
            return (
              <div
                style={
                  card === "Custom"
                    ? {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }
                    : {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "30px",
                      }
                }
              >
                {card}
                <Radio
                  checked={
                    (selectedValue.name === "upi" &&
                      selectedValue.value === card) ||
                    (selectedValue.name === "all" &&
                      selectedValue.value === card)
                  }
                  onChange={handleChange}
                  value={card}
                  name="upi"
                  inputProps={{ "aria-label": "A" }}
                />
              </div>
            );
          })}
          <FormControl
            variant={"standard"}
            sx={{ m: 1, minWidth: 120 }}
            size="small"
          >
            <Select
              labelId="demo-select-small"
              id="customType"
              name="customType"
              value={cardCustomType}
              disabled={
                selectedValue.value !== "Custom" || selectedValue.name !== "upi"
              }
              //   label="Use as"
              onChange={(e) => setCardCustomType(e.target.value)}
            >
              {settlementDropdown.map((data) => (
                <MenuItem value={data.value}>{data.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
      <div
        id="all"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Select All</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 30px",
          }}
        >
          {cardType.map((card) => {
            return (
              <div
                style={
                  card === "Custom"
                    ? {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }
                    : {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "30px",
                      }
                }
              >
                {card}
                <Radio
                  checked={
                    selectedValue.name === "all" && selectedValue.value === card
                  }
                  onChange={handleChange}
                  value={card}
                  name="all"
                  inputProps={{ "aria-label": "A" }}
                />
              </div>
            );
          })}
          <FormControl
            variant={"standard"}
            sx={{ m: 1, minWidth: 120 }}
            size="small"
          >
            <Select
              labelId="demo-select-small"
              id="customType"
              name="customType"
              value={cardCustomType}
              disabled={
                selectedValue.value !== "Custom" || selectedValue.name !== "all"
              }
              //   label="Use as"
              onChange={(e) => {
                setCardCustomType(e.target.value);
              }}
            >
              {settlementDropdown.map((data) => (
                <MenuItem value={data.value}>{data.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
}

export default StepTwo;
