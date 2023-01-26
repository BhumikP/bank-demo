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
  return (
    <div>
      <CommonCard
        name="Loyalty Card"
        visaChecked={LoyaltyChecked}
        handleChange={handleLoyaltyChange}
      />
      <CommonCard
        name="Prepaid Card"
        visaChecked={PrepaidChecked}
        handleChange={handlePrepaidChange}
      />
      <CommonCard
        name="EMI"
        visaChecked={EmiChecked}
        handleChange={handleEmiChange}
      />
      <CommonCard
        name="Wallet"
        visaChecked={WalletChecked}
        handleChange={handleWalletChange}
      />
    </div>
  );
}

export default StepSix;
