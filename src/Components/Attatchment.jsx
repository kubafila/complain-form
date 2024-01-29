import React, {useContext} from "react";
import {FormStateContext} from "../FormContext";
import BottomNav from "./BottomNav";

const Attatchment = () => {

    const state = useContext(FormStateContext)

    let required = false

    if (state.data.formType === 'no-transaction') {
        required = true
    }

    if (state.data.formType === 'cashback-rejected') {
        required = true
    }

    if (state.data.formType === 'no-transaction') {
        required = true
    }



    return (<>
        <h1>Dodawanie załącznika</h1>
        {required ? <p>Obowiązkowe!</p> :  <p>Można pominąć</p>}
        <BottomNav />
    </>)

}

export default Attatchment