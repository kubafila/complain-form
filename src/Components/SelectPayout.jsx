import React, {useContext, useState} from "react";
import {payoutsList} from "../PayoutsList";
import BottomNav from "./BottomNav";
import {FormDispatchContext} from "../FormContext";

const SelectPayout = () => {

    const [payoutId, setPayoutId] = useState(payoutsList[0].id)
    const dispatch = useContext(FormDispatchContext)
    const handleChange = (e) => setPayoutId(e.target.value)

    const handleNext = () => {
        const selectedPayout = payoutsList.find(item => item.id === payoutId)

        const transactionApproved = selectedPayout.status === 'APPROVED'
        console.log(selectedPayout)
        dispatch({
            type: 'SET_FORM_DATA',
            payload: {payoutId}
        })

        dispatch({
            type: transactionApproved
                ? 'SET_FORM_TYPE_PAYOUT'
                : 'SET_FORM_TYPE_PAYOUT_STATUS_DIFFERENT_THAN_ACCEPTED'
        })



        dispatch({
            type: 'GO_TO_NEXT_STEP'
        })


    }


    return <>
        <h1>Wybierz wypłatę</h1>
        {payoutsList.map((payout, index) => <div  key={payout.id} style={{margin: '20px 0'}}>
            <input type={"radio"} value={payout.id} name={'transaction'} id={payout.id}
                   onChange={handleChange} defaultChecked={index === 0}/>
            <label htmlFor={payout.id}>{payout.date} - {payout.amount} ({payout.status})</label>
        </div>)}
        <BottomNav onNext={handleNext}/>
    </>
}

export default SelectPayout