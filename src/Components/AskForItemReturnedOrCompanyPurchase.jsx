import React, {useContext, useState} from "react";
import {FormDispatchContext} from "../FormContext";
import BottomNav from "./BottomNav";

const AskForItemReturnedOrCompanyPurchase = () => {

    const [itemReturned, setItemReturned] = useState(false)
    const [companyPurchase, setCompanyPurchase] = useState(false)
    const dispatch = useContext(FormDispatchContext);


    const handleChangePurchaseReturned = (e) => {
        setItemReturned(e.target.checked)
    }

    const handleChangeCompanyPurchase = (e) => {
        setCompanyPurchase(e.target.checked)
    }
    const handleNext = () => {

        dispatch({
            type: 'SET_FORM_DATA',
            payload: {
                purchaseReturned: itemReturned,
                companyPurchase
            }
        })

        if (itemReturned || companyPurchase) {
            dispatch({
                type: 'SHOW_FORM_TYPE_ERROR_PURCHASE'
            })
            return
        }

        dispatch({
            type: 'GO_TO_NEXT_STEP'
        })

    }
    return <>
        <h1>Czy zakupione produkty</h1>
        <div className="form-field">
            <input type={"checkbox"} onChange={handleChangePurchaseReturned} checked={itemReturned}
                   id={"purchaseReturned"}/>
            <label htmlFor='purchaseReturned'>Zostały zwrócone?</label>
        </div>
        <br/>
        <hr/>
        <br/>
        <div className="form-field">
            <input type={"checkbox"} onChange={handleChangeCompanyPurchase} checked={companyPurchase}
                   id={"companyPurchase"}/>
            <label htmlFor='companyPurchase'>Zostały kupione na firmę?</label>
        </div>
        <BottomNav onNext={handleNext}/>
    </>
}

export default AskForItemReturnedOrCompanyPurchase