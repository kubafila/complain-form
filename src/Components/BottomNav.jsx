import React, {useContext} from "react";
import {FormDispatchContext, FormStateContext} from "../FormContext";

const BottomNav = ({onNext}) => {

    const state = useContext(FormStateContext)
    const dispatch = useContext(FormDispatchContext)

    const handleBack = () => {
        dispatch({
            type: 'GO_TO_PREVIOUS_STEP'
        })
    }
    const handleNext = () => {
        dispatch({
            type: 'GO_TO_NEXT_STEP'
        })
    }
    return <div style={{margin: '40px 0', display: 'flex', gap: '40px'}}>
        {state.currentStep > 0 && <button onClick={handleBack}>Wróć</button>}
        <button onClick={onNext || handleNext}>Dalej</button>
    </div>
}

export default BottomNav