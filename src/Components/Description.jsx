import React, {useContext, useState} from "react";
import BottomNav from "./BottomNav";
import {FormDispatchContext} from "../FormContext";

const Description = () => {

    const [description, setDescription] = useState('')
    const dispatch = useContext(FormDispatchContext)
    const handleTextChange = (e) => {
        setDescription(e.target.value)
    }

    const handleNext = () => {
        if(description){
            dispatch({
                type: 'SET_FORM_DATA',
                payload: {description}
            })
        }

        dispatch({
            type: 'GO_TO_NEXT_STEP'
        })
    }
    return (
        <>
            <h1>Dodatkowe uwagi</h1>
            <div className="form-field">
                <label htmlFor="desc">Opis problemu (opcjonalnie)</label>
                <textarea name="desc" id="desc" cols="30" rows="10" onChange={handleTextChange} value={description}></textarea>
            </div>
            <BottomNav onNext={handleNext}/>
        </>
    )
}

export default Description