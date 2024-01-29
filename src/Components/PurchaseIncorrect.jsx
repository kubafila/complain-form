import React, {useContext} from "react";
import {FormStateContext} from "../FormContext";

const PurchaseIncorrect = () => {
    const state = useContext(FormStateContext);

    return <div>
        <p>Twój błąd</p>

        {state.data.purchaseReturned && <p>Nie można zwracać produktów</p>}
        {state.data.companyPurchase && <p>Nie można kupować na firmę</p>}
    </div>
}

export default PurchaseIncorrect