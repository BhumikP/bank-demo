import { FormControl, MenuItem, Radio, Select } from "@mui/material";
import React from "react";
import "./styles.css";
function StepTwo() {
  const cardType = ["Instant", "T+1", "T+2", "Custom"];
  const [selectedValue, setSelectedValue] = React.useState("Instant");
  const [cardCustomType, setCardCustomType] = React.useState();

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
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
                  checked={selectedValue === card}
                  onChange={handleChange}
                  value={card}
                  name="radio-buttons"
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
              disabled={selectedValue !== "Custom"}
              //   label="Use as"
              onChange={(e) => setCardCustomType(e.target.value)}
            >
              <MenuItem value={"T+3"}>T+3</MenuItem>
              <MenuItem value={"T+4"}>T+4</MenuItem>
              <MenuItem value={"T+5"}>T+5</MenuItem>
              <MenuItem value={"T+6"}>T+6</MenuItem>
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
                  checked={selectedValue === card}
                  onChange={handleChange}
                  value={card}
                  name="radio-buttons"
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
              disabled={selectedValue !== "Custom"}
              //   label="Use as"
              onChange={(e) => setCardCustomType(e.target.value)}
            >
              <MenuItem value={"T+3"}>T+3</MenuItem>
              <MenuItem value={"T+4"}>T+4</MenuItem>
              <MenuItem value={"T+5"}>T+5</MenuItem>
              <MenuItem value={"T+6"}>T+6</MenuItem>
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
                  checked={selectedValue === card}
                  onChange={handleChange}
                  value={card}
                  name="radio-buttons"
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
              disabled={selectedValue !== "Custom"}
              //   label="Use as"
              onChange={(e) => setCardCustomType(e.target.value)}
            >
              <MenuItem value={"T+3"}>T+3</MenuItem>
              <MenuItem value={"T+4"}>T+4</MenuItem>
              <MenuItem value={"T+5"}>T+5</MenuItem>
              <MenuItem value={"T+6"}>T+6</MenuItem>
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
                  checked={selectedValue === card}
                  onChange={handleChange}
                  value={card}
                  name="radio-buttons"
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
              disabled={selectedValue !== "Custom"}
              //   label="Use as"
              onChange={(e) => setCardCustomType(e.target.value)}
            >
              <MenuItem value={"T+3"}>T+3</MenuItem>
              <MenuItem value={"T+4"}>T+4</MenuItem>
              <MenuItem value={"T+5"}>T+5</MenuItem>
              <MenuItem value={"T+6"}>T+6</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
}

export default StepTwo;
