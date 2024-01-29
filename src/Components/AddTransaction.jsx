import React, {useContext, useState} from "react";
import BottomNav from "./BottomNav";
import {FormDispatchContext} from "../FormContext";

const AddTransaction = () => {

    const dispatch = useContext(FormDispatchContext)
    const [newTransaction, setNewTransacion] = useState('')

    const handleChange = (e) => {
        setNewTransacion(e.target.value)
    }

    const handleNext = () => {
        dispatch({
            type: 'SET_FORM_DATA',
            payload: {
                newTransaction
            }
        })


        dispatch({
            type: 'GO_TO_NEXT_STEP'
        })
    }
    return <div>

        <div className="form-filed">
            <label htmlFor='name'>Nazwa Transakcji (Niby sklep, data itp...)</label>
            <input type="text" id='name' onChange={handleChange} value={newTransaction}/>
        </div>
<BottomNav onNext={handleNext}/>
    </div>
}

export default AddTransaction