import React, { Fragment, useReducer } from "react";
import FirstStep from "../components/FirstStep";
import SecondStep from "../components/SecondStep";
const FormState = React.createContext();
const FormDispatch = React.createContext();

const allSteps = [
  { component: FirstStep, showIn: ["BUSINESS", "AMP_PARTNER", "Default"] },
  { component: SecondStep, showIn: ["BUSINESS"] },
  //   { component: DiverseFounder, showIn: ['BUSINESS'] },
  //   { component: BusinessInfo, showIn: ['AMP_PARTNER'] },
];

export function useFormState() {
  const context = React.useContext(FormState);
  if (!context) {
    throw new Error("useFormState must be used within the AppProvider");
  }
  return context;
}

export function useFormDispatch() {
  const context = React.useContext(FormDispatch);
  if (!context) {
    throw new Error("useFormDispatch must be used within the AppProvider");
  }
  return context;
}

function appReducer(state, action) {
  switch (action.type) {
    case "CHANGE_VALUE": {
      return {
        ...state,
        data: {
          ...state.data,
          [action.name]: action.value,
          errors: {
            ...state.data.errors,
            [action.name]: action.error,
          },
        },
      };
    }

    case "CHANGE_NESTED_VALUE": {
      return {
        ...state,
        data: {
          ...state.data,
          [action.mainType]: {
            ...state.data[action.mainType],
            [action.name]: action.value,
          },
          //   errors: {
          //     ...state.data.errors,
          //     [action.mainType]: {
          //       ...state.data.errors[action.mainType],
          //       [action.name]: action.error,
          //     },
          //   },
        },
      };
    }

    case "CHANGE_STEP": {
      window.scrollTo(0, 0);
      return {
        ...state,
        currentStep: action.currentStep,
      };
    }

    case "CHANGE_VALIDATE": {
      return {
        ...state,
        data: {
          ...state.data,
          errors: {
            ...state.data.errors,
            [action.name]: action.error,
          },
        },
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function FormProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, {
    currentStep: 1,
    data: {
      useAsType: "",
      sourcingChannel: "",
      toggleData: {
        // isDebit: false,
        isCard: false,
        isNetBanking: false,
        isUpi: false,
        isPrepaidCard: false,
        isLoyaltyCard: false,
        isWallet: false,
      },
      basicDetails: {
        bankName: "",
        BankId: "",
        TerminalId: "",
        SecretKey: "",
        SellKey: "",
      },
    },
  });

  return (
    <FormState.Provider value={state}>
      <FormDispatch.Provider value={dispatch}>{children}</FormDispatch.Provider>
    </FormState.Provider>
  );
}

function OnBoarding() {
  return (
    <>
      <FormProvider>
        <Steps />
      </FormProvider>
    </>
  );
}

export default OnBoarding;

function Steps() {
  const { currentStep } = useFormState() || [];

  const steps = allSteps.filter(
    (step) =>
      // step.showIn.includes(data.accountType || "Default")
      step
  );

  const { component: Component } = steps?.[currentStep - 1] || {};

  return <Component />;
}
