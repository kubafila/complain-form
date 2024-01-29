import {STEPS} from "./Steps";

const FLOWS_LIST = {
    noTransaction: {
        normal: [
            STEPS.SELECT_REASON,
            STEPS.ASK_FOR_ADBLOCK_OR_VPN,
            STEPS.ADD_NEW_TRANSACTION,
            STEPS.ADD_ATTACHMENT,
            STEPS.THANK_YOU
        ],
        error: [
            STEPS.THANK_YOU_ADBLOCK_OR_VPN
        ]
    },
    differentAmount: {
        normal: [
            STEPS.SELECT_REASON,
            STEPS.SELECT_TRANSACTION,
            STEPS.ADD_ATTACHMENT,
            STEPS.ADD_DESCRIPTION,
            STEPS.THANK_YOU
        ]
    },
    status: {
        normal: [
            STEPS.SELECT_REASON,
            STEPS.SELECT_TRANSACTION,
            STEPS.ADD_ATTACHMENT,
            STEPS.ADD_DESCRIPTION,
            STEPS.THANK_YOU
        ]
    },
    cashbackRejected: {
        normal: [
            STEPS.SELECT_REASON,
            STEPS.ASK_FOR_ITEM_RETURNED_OR_COMPANY_PURCHASE,
            STEPS.SELECT_TRANSACTION,
            STEPS.ADD_ATTACHMENT,
            STEPS.THANK_YOU
        ],
        error: [
            STEPS.THANK_YOU_ITEM_RETURNED_OR_COMPANY_PURCHASE
        ]
    },
    payout: {
        normal: [
            STEPS.SELECT_REASON,
            STEPS.SELECT_PAYOUT,
            STEPS.SHOW_INFO_ABOUT_SELECTED_PAYOUT,
            STEPS.THANK_YOU
        ],
        askAboutPayment: [
            STEPS.SELECT_REASON,
            STEPS.SELECT_PAYOUT,
            STEPS.SHOW_INFO_ABOUT_SELECTED_PAYOUT,
            STEPS.ADD_DESCRIPTION,
            STEPS.THANK_YOU
        ],
        noPayouts: [
            STEPS.SELECT_REASON,
            STEPS.ADD_DESCRIPTION,
            STEPS.THANK_YOU
        ],
        statusDifferentFromAccepted: [
            STEPS.SELECT_REASON,
            STEPS.SELECT_PAYOUT,
            STEPS.ADD_DESCRIPTION,
            STEPS.THANK_YOU
        ]
    },
    other: {
        normal: [
            STEPS.SELECT_REASON,
            STEPS.ADD_DESCRIPTION,
            STEPS.ADD_ATTACHMENT,
            STEPS.THANK_YOU
        ]
    }
}

export default FLOWS_LIST