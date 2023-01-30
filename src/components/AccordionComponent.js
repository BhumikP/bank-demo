import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useFormState } from "../hooks/useData";
import "./Accordion.css";
import StepOne from "./Steps/StepOne";
import StepThree from "./Steps/StepThree";
import StepTwo from "./Steps/StepTwo";
import StepFour from "./Steps/StepFour";
import StepFive from "./Steps/StepFive";
import StepSix from "./Steps/StepSix";
import StepTen from "./Steps/StepTen";
import StepEight from "./Steps/StepEight";
import StepNine from "./Steps/StepNine";
import StepSeven from "./Steps/StepSeven";

const accordionSteps = [
  {
    name: "first",
    stepName: "1.Basic Details",
    component: (props) => <StepOne props={props} />,
  },
  {
    name: "second",
    stepName: "2.Settlement Cycle",
    component: (props) => <StepTwo props={props} />,
  },
  {
    name: "isCreditDebit",
    stepName: "3.Provided Services",
    component: (props) => <StepThree props={props} />,
  },
  {
    name: "isNetBanking",
    stepName: "4.NetBanking",
    component: (props) => <StepFour props={props} />,
  },
  {
    name: "isUpi",
    stepName: "5.UPI",
    component: (props) => <StepFive props={props} />,
  },
  {
    name: "isLoyaltyCard",
    stepName: "6.Loyalty Cards",
    component: (props) => <StepSix props={props} />,
  },
  {
    name: "isPrepaidCard",
    stepName: "7.Prepaid Cards",
    component: (props) => <StepSeven props={props} />,
  },
  {
    name: "isEmi",
    stepName: "8.EMI Cards",
    component: (props) => <StepEight props={props} />,
  },
  {
    name: "isWallet",
    stepName: "9.Wallet",
    component: (props) => <StepNine props={props} />,
  },
  {
    name: "uploadDoc",
    stepName: "10.Upload Documents",
    component: (props) => <StepTen props={props} />,
  },
];

function AccordionComponent() {
  const [expanded, setExpanded] = React.useState(false);
  const { currentStep, data } = useFormState();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  console.log(data, currentStep);

  const handleDisable = (name) => {
    const { toggleData } = data;
    if (name === "isNetBanking" && !toggleData.isNetBanking) {
      return name;
    }
    if (name === "isUpi" && !toggleData.isUpi) {
      return name;
    }
    if (name === "isCreditDebit" && !toggleData.isCard) {
      return name;
    }
    if (
      name === "isOther" &&
      !toggleData.isLoyaltyCard &&
      !toggleData.isPrepaidCard &&
      !toggleData.isWallet
    ) {
      return name;
    }
    if (name === "isPrepaidCard" && !toggleData.isPrepaidCard) {
      return name;
    }
    if (name === "isLoyaltyCard" && !toggleData.isLoyaltyCard) {
      return name;
    }
    if (name === "isWallet" && !toggleData.isWallet) {
      return name;
    }
    if (name === "isEmi" && !toggleData.isEmi) {
      return name;
    }
    if (name === "uploadDoc" && data.useAsType !== "aggregator") {
      return "uploadDoc";
    }
  };

  return (
    <div>
      {accordionSteps.map((dataComponent) => {
        return (
          <Accordion
            key={dataComponent.name}
            className="accordion__main"
            expanded={expanded === dataComponent.name}
            onChange={handleChange(dataComponent.name)}
            disabled={handleDisable(dataComponent.name)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                {dataComponent.stepName}
              </Typography>
              {/* <Typography sx={{ color: "text.secondary" }}>
                I am an accordion
              </Typography> */}
            </AccordionSummary>
            <AccordionDetails>{dataComponent.component()}</AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}

export default AccordionComponent;
