import React, { useState } from "react";
import CommonCard from "../common/commonCard";

function StepSix() {
  const [LoyaltyChecked, setLoyaltyChecked] = useState(true);
  const handleLoyaltyChange = (event) => {
    setLoyaltyChecked(event.target.checked);
  };

  const [PrepaidChecked, setPrepaidChecked] = useState(true);
  const handlePrepaidChange = (event) => {
    setPrepaidChecked(event.target.checked);
  };

  const [EmiChecked, setEmiChecked] = useState(true);
  const handleEmiChange = (event) => {
    setEmiChecked(event.target.checked);
  };

  const [WalletChecked, setWalletChecked] = useState(true);
  const handleWalletChange = (event) => {
    setWalletChecked(event.target.checked);
  };

  const [allValues, setAllValues] = useState([]);

  return (
    <div>
      <CommonCard
        name="Loyalty Card"
        visaChecked={LoyaltyChecked}
        handleChange={handleLoyaltyChange}
        allValue={allValues}
        setAllValue={setAllValues}
      />
      <CommonCard
        name="Prepaid Card"
        visaChecked={PrepaidChecked}
        handleChange={handlePrepaidChange}
        allValue={allValues}
        setAllValue={setAllValues}
      />
      <CommonCard
        name="EMI"
        visaChecked={EmiChecked}
        handleChange={handleEmiChange}
        allValue={allValues}
        setAllValue={setAllValues}
      />
      <CommonCard
        name="Wallet"
        visaChecked={WalletChecked}
        handleChange={handleWalletChange}
        allValue={allValues}
        setAllValue={setAllValues}
      />
      {allValues.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th>Card Type</th>
              <th>Card Brand</th>
              <th>Upto 2000</th>
              <th>Above 2000</th>
            </tr>
          </thead>
          <tbody>
            {allValues.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.cardType}</td>
                  <td>{data.brandName}</td>
                  <td>{data.below}</td>
                  <td>{data.above}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StepSix;
