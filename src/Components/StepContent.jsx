import React, {useContext} from "react";
import {FormStateContext} from "../FormContext";
import {STEPS} from "../Steps";
import SelectForm from "./SelectForm";
import AskForItemReturnedOrCompanyPurchase from "./AskForItemReturnedOrCompanyPurchase";
import PurchaseIncorrect from "./PurchaseIncorrect";
import SelectTransaction from "./SelectTransaction";
import Attatchment from "./Attatchment";
import AddTransaction from "./AddTransaction";
import ThankYou from "./ThankYou";
import Description from "./Description";
import AskForAdblockOrVPN from "./AskForAdblockOrVPN";
import ErrorMessageNoAdblockOrVPN from "./ErrorMessageNoAdblockOrVPN";
import SelectPayout from "./SelectPayout";
import PayoutDetails from "./PayoutDetails";

const StepContent = () => {
    const state = useContext(FormStateContext);
        const currentStep = state.currentStep
        const currentStepName = state.flow[currentStep]

    const getStepContent = (stepName) => {
        switch (stepName){
            case STEPS.SELECT_REASON:
                return <SelectForm />
            case STEPS.ASK_FOR_ADBLOCK_OR_VPN:
                return <AskForAdblockOrVPN />
            case STEPS.ASK_FOR_ITEM_RETURNED_OR_COMPANY_PURCHASE:
                return <AskForItemReturnedOrCompanyPurchase />
            case STEPS.THANK_YOU_ITEM_RETURNED_OR_COMPANY_PURCHASE:
                return <PurchaseIncorrect />
            case STEPS.ADD_NEW_TRANSACTION:
                return <AddTransaction />
            case STEPS.SELECT_TRANSACTION:
                return <SelectTransaction />
            case STEPS.THANK_YOU:
                return <ThankYou />
            case STEPS.ADD_ATTACHMENT:
                return <Attatchment />
            case STEPS.ADD_DESCRIPTION:
                    return <Description />
            case STEPS.THANK_YOU_ADBLOCK_OR_VPN:
                return <ErrorMessageNoAdblockOrVPN />
            case STEPS.SELECT_PAYOUT:
                return <SelectPayout />
            case STEPS.SHOW_INFO_ABOUT_SELECTED_PAYOUT:
                return <PayoutDetails />
            default:
                return <h1>Brak komponentu</h1>
        }
    }
    return( <>
        {getStepContent(currentStepName)}
    </>)
}

export default StepContent