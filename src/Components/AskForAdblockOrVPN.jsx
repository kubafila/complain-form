import React, {useContext, useState} from "react";
import {FormDispatchContext} from "../FormContext";
import BottomNav from "./BottomNav";


const AskForAdblockOrVPN = () => {

    const [usedAdblock, setUsedAdblock] = useState(false)
    const [usedVPN, setUsedVPN] = useState(false)

    const dispatch = useContext(FormDispatchContext)
    const handleInputAdblock = (e) => setUsedAdblock(e.target.value)
    const handleInputVPN = (e) => setUsedVPN(e.target.value)
    const handleNext = () => {

        if (usedAdblock || usedVPN) {
            dispatch({
                type: 'SHOW_FORM_ERROR_ADBLOCK_OR_VPN'
            })
            return
        }

        dispatch({
            type: 'GO_TO_NEXT_STEP'
        })

    }

    return <>
        <h1>Czy korzystałeś z: </h1>
        <div className="form-field">
            <input type={"checkbox"} onChange={handleInputAdblock} checked={usedAdblock}
                   id={"purchaseReturned"}/>
            <label htmlFor='purchaseReturned'>Adblocka</label>
        </div>
        <br/>
        <hr/>
        <br/>
        <div className="form-field">
            <input type={"checkbox"} onChange={handleInputVPN} checked={usedVPN}
                   id={"companyPurchase"}/>
            <label htmlFor='companyPurchase'>Sieci VPN</label>
        </div>
        <BottomNav onNext={handleNext}/>
    </>
}

export default AskForAdblockOrVPN