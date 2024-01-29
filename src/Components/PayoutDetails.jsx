import {useContext} from "react";
import {FormDispatchContext, FormStateContext} from "../FormContext";
import {payoutsList} from "../PayoutsList";
import BottomNav from "./BottomNav";

const PayoutDetails = () => {

    const state = useContext(FormStateContext)
    const dispatch = useContext(FormDispatchContext)


    const selectedTransaction = payoutsList.find(payout =>payout.id === state.data.payoutId)

    const handleIHaveAQuestionButton = () => {
        dispatch({
            type: 'SET_FORM_TYPE_PAYOUT_ASK_ABOUT_PAYOUT'
        })

        dispatch({
            type: 'GO_TO_NEXT_STEP'
        })

    }
    return <>
        <h1>Szczegóły transakcji</h1>
        <pre>
            {JSON.stringify({selectedTransaction}, null, 2)}
        </pre>
        <button onClick={handleIHaveAQuestionButton}>Mam pytanie do wypłaty</button>
        <BottomNav />
    </>
}

export default PayoutDetails