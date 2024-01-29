import React, {useContext, useState} from "react";
import {FormDispatchContext, FormStateContext} from "../FormContext";
import BottomNav from "./BottomNav";
import {payoutsList} from "../PayoutsList";

const SelectForm = () => {
    const dispatch = useContext(FormDispatchContext);

    const [selectedType, setSelectedType] = useState('no-transaction')

    const handleInputChange = (e) => {
        setSelectedType(e.target.value)
    }
    const handleNext = () => {


        if (selectedType === 'no-transaction') {
            dispatch({
                type: 'SET_FORM_TYPE_NO_TRANSACTION'
            })
        }
        if (selectedType === 'different-amount') {
            dispatch({
                type: 'SET_FORM_TYPE_DIFFERENT_AMOUNT'
            })
        }
        if (selectedType === 'status') {
            dispatch({
                type: 'SET_FORM_TYPE_STATUS'
            })
        }
        if (selectedType === 'cashback-rejected') {
            dispatch({
                type: 'SET_FORM_TYPE_CASHBACK_REJECTED'
            })
        }
        if (selectedType === 'payout') {

            const userHasPayouts = payoutsList.length
            dispatch({
                type: userHasPayouts ? 'SET_FORM_TYPE_PAYOUT' : 'SET_FORM_TYPE_PAYOUT_NO_PAYOUTS'
            })
        }
        if (selectedType === 'other') {
            dispatch({
                type: 'SET_FORM_TYPE_OTHER'
            })
        }

        dispatch({
            type: 'GO_TO_NEXT_STEP'
        })
    }

    return (
        <>
            <h1>Wybierz Formularz</h1>
            <div className="form-field">
                <input id='no-transaction' type='radio' name='form-type' value='no-transaction'
                       defaultChecked
                       onChange={handleInputChange}/>
                <label htmlFor='no-transaction'>Brak transakcji</label>
            </div>
            <div className="form-field">
                <input id='different-amount' type='radio' name='form-type' value='different-amount'
                       onChange={handleInputChange}/>
                <label htmlFor='different-amount'>Inna kwota</label>
            </div>
            <div className="form-field">
                <input id='status' type='radio' name='form-type' value='status' onChange={handleInputChange}/>
                <label htmlFor='status'>Pytanie o status</label>
            </div>
            <div className="form-field">
                <input id='cashback-rejected' type='radio' name='form-type' value='cashback-rejected'
                       onChange={handleInputChange}/>
                <label htmlFor='cashback-rejected'>Dlaczego odrzucony?</label>
            </div>
            <div className="form-field">
                <input id='payout' type='radio' name='form-type' value='payout' onChange={handleInputChange}/>
                <label htmlFor='payout'>Pytanie o wypłatę</label>
            </div>
            <div className="form-field">
                <input id='other' type='radio' name='form-type' value='other' onChange={handleInputChange}/>
                <label htmlFor='other'>Inne</label>
            </div>
            <BottomNav onNext={handleNext}/>

        </>
    )

}

export default SelectForm