import React, {createContext, useReducer} from "react";
import FLOWS_LIST from "./Flows";
export const FormStateContext = createContext(null);
export const FormDispatchContext = createContext(null);

const formReducer = (state, action) => {

    switch (action.type) {
        case 'SET_FORM_TYPE_NO_TRANSACTION':
            return {
                ...state,
                data: {
                    ...state.data,
                    formType: 'no-transaction'
                },
                flow: FLOWS_LIST.noTransaction.normal
            }
        case 'SET_FORM_TYPE_DIFFERENT_AMOUNT':
            return {
                ...state,
                data: {
                    ...state.data,
                    formType: 'different-amount'
                },
                flow: FLOWS_LIST.differentAmount.normal
            }
        case 'SET_FORM_TYPE_STATUS':
            return {
                ...state,
                data: {
                    ...state.data,
                    formType: 'status'
                },
                flow: FLOWS_LIST.status.normal
            }
        case 'SET_FORM_TYPE_CASHBACK_REJECTED':
            return {
                ...state,
                data: {
                    ...state.data,
                    formType: 'cashback-rejected'
                },
                flow: FLOWS_LIST.cashbackRejected.normal
            }
        case 'SET_FORM_TYPE_PAYOUT':
            return {
                ...state,
                data: {
                    ...state.data,
                    formType: 'payout'
                },
                flow: FLOWS_LIST.payout.normal
            }
        case 'SET_FORM_TYPE_PAYOUT_NO_PAYOUTS':
            return {
                ...state,
                data: {
                    ...state.data,
                    formType: 'payout-no-payouts'
                },
                flow: FLOWS_LIST.payout.noPayouts
            }
        case 'SET_FORM_TYPE_PAYOUT_STATUS_DIFFERENT_THAN_ACCEPTED':
            return {
                ...state,
                data: {
                    ...state.data,
                    formType: 'payout-status-different-than-accepted'
                },
                flow: FLOWS_LIST.payout.statusDifferentFromAccepted
            }
        case 'SET_FORM_TYPE_PAYOUT_ASK_ABOUT_PAYOUT':
            return {
                ...state,
                data: {
                    ...state.data,
                    formType: 'payout-ask-about-payment'
                },
                flow: FLOWS_LIST.payout.askAboutPayment
            }
        case 'SET_FORM_TYPE_OTHER':
            return {
                ...state,
                data: {
                    ...state.data,
                    formType: 'other'
                },
                flow: FLOWS_LIST.other.normal
            }
        case 'GO_TO_NEXT_STEP':
            return {
                ...state,
                currentStep: state.currentStep + 1
            }
        case 'GO_TO_PREVIOUS_STEP':
            return {
                ...state,
                currentStep: state.currentStep + -1
            }
        case 'SET_FORM_DATA':
            return {
                ...state,
                data: {
                    ...state.data,
                    ...action.payload
                }
            }
        case 'SHOW_FORM_ERROR_PURCHASE':
            return {
                ...state,
                currentStep: 0,
                data:{
                    ...state.data,
                    formType: 'error-purchase'
                },
                flow: FLOWS_LIST.noTransaction.noTransactionPurchaseIncorrect
            }

        case 'SHOW_FORM_ERROR_ADBLOCK_OR_VPN':
            return {
                ...state,
                currentStep: 0,
                data:{
                    ...state.data,
                    formType: 'error-purchase'
                },
                flow: FLOWS_LIST.noTransaction.error
            }

        default:
            return state
    }
}
const FormProvider = ({children}) => {

    const [formState, dispatch] = useReducer(formReducer, defaultFormState)

    return (
        <FormStateContext.Provider value={formState}>
            <FormDispatchContext.Provider value={dispatch}>
                <main style={{padding: '50px 100px', display: 'flex', gap: '40px'}}>
                    <section style={{flex:'1'}}>
                        {children}
                    </section>
                    <section style={{flex: '1'}}>
                       <pre style={{padding: '20px 40px'}}>
                        {JSON.stringify(formState, null, 2)}</pre>
                    </section>
                </main>
            </FormDispatchContext.Provider>
        </FormStateContext.Provider>
    )
}




const defaultFormState = {
    data: {
        formType: '',
        purchaseReturned: false,
        companyPurchase: false,
        transactionId: '',
        payoutId: '',
        orderNumber: '',
        newTransaction: '',
        description: ''
    },
    currentStep: 0,
    flow: FLOWS_LIST.noTransaction.normal
}
export default FormProvider