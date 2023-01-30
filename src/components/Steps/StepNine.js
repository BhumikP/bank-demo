import React, { useState } from "react";
import { useFormState } from "../../hooks/useData";
import CommonCard from "../common/commonCard";

function StepNine() {
  const { data } = useFormState();

  const [WalletChecked, setWalletChecked] = useState(true);
  const handleWalletChange = (event) => {
    setWalletChecked(event.target.checked);
  };

  const [allValues, setAllValues] = useState([]);

  return (
    <div>
      <CommonCard
        name="Wallet"
        visaChecked={WalletChecked}
        handleChange={handleWalletChange}
        allValue={allValues}
        setAllValue={setAllValues}
        isDisabled={!data.toggleData.isWallet}
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

export default StepNine;
