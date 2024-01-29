import React, {useContext, useState} from "react";
import {FormDispatchContext} from "../FormContext";
import {transactionList} from "../transactionList";
import BottomNav from "./BottomNav";

const SelectTransaction = () => {
    const dispatch = useContext(FormDispatchContext);

    const [transactionId, setTransactionId] = useState(transactionList[0].id)

    const handleChange = (e) => {
        setTransactionId(e.target.value)
    }

    const handleNext = () => {
        dispatch({
            type: 'SET_FORM_DATA',
            payload: {
                transactionId
            }
        })

        dispatch({
            type: 'GO_TO_NEXT_STEP'
        })
    }
    return (<>
        <h1>Wybierz Transakcje</h1>
        {transactionList.map(transation => <div style={{margin: '20px 0'}}>
            <input type={"radio"} value={transation.id} name={'transaction'} id={transation.id}
                   onChange={handleChange}/>
            <label htmlFor={transation.id}>{transation.name} - {transation.amount}</label>
        </div>)}
        <BottomNav onNext={handleNext}/>
    </>)


}

export default SelectTransaction