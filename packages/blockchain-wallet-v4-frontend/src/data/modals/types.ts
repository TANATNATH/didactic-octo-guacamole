import { RecurringBuyOrigins } from 'data/components/types'

import * as AT from './actionTypes'

export enum ModalName {
  ADD_BANK_YAPILY_MODAL = 'ADD_BANK_YAPILY_MODAL',
  ADD_BANK_YODLEE_MODAL = 'ADD_BANK_YODLEE_MODAL',
  ADD_BTC_WALLET_MODAL = 'ADD_BTC_WALLET_MODAL',
  AIRDROP_CLAIM_MODAL = 'AIRDROP_CLAIM_MODAL',
  AIRDROP_SUCCESS_MODAL = 'AIRDROP_SUCCESS_MODAL',
  AUTO_DISCONNECTION_MODAL = 'AUTO_DISCONNECTION_MODAL',
  BANK_DEPOSIT_MODAL = 'BANK_DEPOSIT_MODAL',
  BANK_DETAILS_MODAL = 'BANK_DETAILS_MODAL',
  BITPAY_INFORMATIONAL_MODAL = 'BITPAY_INFORMATIONAL_MODAL',
  BITPAY_INVOICE_EXPIRED_MODAL = 'BITPAY_INVOICE_EXPIRED_MODAL',
  CONFIRMATION_MODAL = 'CONFIRMATION_MODAL',
  CONFIRM_DISABLE_2FA = 'CONFIRM_DISABLE_2FA',
  CUSTODY_WITHDRAW_MODAL = 'CUSTODY_WITHDRAW_MODAL',
  DELETE_ADDRESS_LABEL_MODAL = 'DELETE_ADDRESS_LABEL_MODAL',
  EDIT_TX_DESCRIPTION_MODAL = 'EDIT_TX_DESCRIPTION_MODAL',
  FUND_RECOVERY_MODAL = 'FUND_RECOVERY_MODAL',
  IMPORT_BTC_ADDRESS_MODAL = 'IMPORT_BTC_ADDRESS_MODAL',
  INTEREST_MODAL = 'INTEREST_MODAL',
  INTEREST_PROMO_MODAL = 'INTEREST_PROMO_MODAL',
  KYC_MODAL = 'KYC_MODAL',
  KYC_RESUBMIT_MODAL = 'KYC_RESUBMIT_MODAL',
  KYC_TIER_UPGRADE_MODAL = 'KYC_TIER_UPGRADE_MODAL',
  LINK_FROM_EXCHANGE_ACCOUNT_MODAL = 'LINK_FROM_EXCHANGE_ACCOUNT_MODAL',
  LINK_TO_EXCHANGE_ACCOUNT_MODAL = 'LINK_TO_EXCHANGE_ACCOUNT_MODAL',
  MOBILE_NUMBER_ADD_MODAL = 'MOBILE_NUMBER_ADD_MODAL',
  MOBILE_NUMBER_CHANGE_MODAL = 'MOBILE_NUMBER_CHANGE_MODAL',
  MOBILE_NUMBER_VERIFY_MODAL = 'MOBILE_NUMBER_VERIFY_MODAL',
  NABU_USER_CONFLICT_REDIRECT = 'NABU_USER_CONFLICT_REDIRECT',
  NEW_VERSION_AVAILABLE = 'NEW_VERSION_AVAILABLE',
  PAIRING_CODE_MODAL = 'PAIRING_CODE_MODAL',
  PROMPT_INPUT_MODAL = 'PROMPT_INPUT_MODAL',
  QR_CODE_MODAL = 'QR_CODE_MODAL',
  RECOVERY_PHRASE_MODAL = 'RECOVERY_PHRASE_MODAL',
  RECURRING_BUYS_MODAL = 'RECURRING_BUYS_MODAL',
  REMOVE_BANK_MODAL = 'REMOVE_BANK_MODAL',
  REQUEST_CRYPTO_MODAL = 'REQUEST_CRYPTO_MODAL',
  RESET_ACCOUNT_FAILED = 'RESET_ACCOUNT_FAILED',
  SECOND_PASSWORD_MODAL = 'SECOND_PASSWORD_MODAL',
  SEND_BCH_MODAL = 'SEND_BCH_MODAL',
  SEND_BTC_MODAL = 'SEND_BTC_MODAL',
  SEND_CRYPTO_MODAL = 'SEND_CRYPTO_MODAL',
  SEND_ETH_MODAL = 'SEND_ETH_MODAL',
  SEND_XLM_CREATE_ACCOUNT_LEARN_MODAL = 'SEND_XLM_CREATE_ACCOUNT_LEARN_MODAL',
  SEND_XLM_MODAL = 'SEND_XLM_MODAL',
  SEND_XLM_RESERVE_LEARN_MODAL = 'SEND_XLM_RESERVE_LEARN_MODAL',
  SHOW_BTC_PRIVATE_KEY_MODAL = 'SHOW_BTC_PRIVATE_KEY_MODAL',
  SHOW_USED_ADDRESS_MODAL = 'SHOW_USED_ADDRESS_MODAL',
  SHOW_XPUB_MODAL = 'SHOW_XPUB_MODAL',
  SIGN_MESSAGE_MODAL = 'SIGN_MESSAGE_MODAL',
  SIMPLE_BUY_MODAL = 'SIMPLE_BUY_MODAL',
  SUPPORT_MODAL = 'SUPPORT_MODAL',
  SWAP_GET_STARTED_MODAL = 'SWAP_GET_STARTED_MODAL',
  SWAP_MODAL = 'SWAP_MODAL',
  TRADING_LIMITS_MODAL = 'TRADING_LIMITS_MODAL',
  TRANSACTION_REPORT_MODAL = 'TRANSACTION_REPORT_MODAL',
  TRANSFER_ETH_MODAL = 'TRANSFER_ETH_MODAL',
  TWO_STEP_GOOGLE_AUTH_MODAL = 'TWO_STEP_GOOGLE_AUTH_MODAL',
  TWO_STEP_SETUP_MODAL = 'TWO_STEP_SETUP_MODAL',
  TWO_STEP_YUBICO_MODAL = 'TWO_STEP_YUBICO_MODAL',
  UPGRADE_ADDRESS_LABELS_MODAL = 'UPGRADE_ADDRESS_LABELS_MODAL',
  UPGRADE_FOR_AIRDROP_MODAL = 'UPGRADE_FOR_AIRDROP_MODAL',
  VERIFY_MESSAGE_MODAL = 'VERIFY_MESSAGE_MODAL',
  WELCOME_MODAL = 'WELCOME_MODAL'
}

export type ModalNameType = keyof typeof ModalName

export type ModalOriginType =
  | 'AirdropClaimGoal'
  | 'AddBankModal'
  | 'AddBankModalBuy'
  | 'AddBankModalDeposit'
  | 'AddBankModalSettings'
  | 'AddBankModalWithdraw'
  | 'BankDetailsModal'
  | 'BankDeposit'
  | 'DepositWithdrawalModal'
  | 'EmptyFeed'
  | 'ExchangeForm'
  | 'FeaturesTopNav'
  | 'Goals'
  | 'Header'
  | 'InterestPage'
  | 'KycDocResubmitGoal'
  | 'KycRequiredStep'
  | 'LoginSaga'
  | 'NabuUserAuth'
  | 'PaymentProtocolGoal'
  | 'PendingOrder'
  | 'PriceChart'
  | 'Request'
  | 'ResetAccount'
  | 'RetrySendEth'
  | 'RecurringBuys'
  | 'RecurringBuyPromo'
  | 'RunKycGoal'
  | 'SBEnterAmountCheckout'
  | 'SBPaymentMethodSelection'
  | 'SellEmpty'
  | 'Send'
  | 'SendBch'
  | 'SendBtc'
  | 'SendEth'
  | 'SendExchangePromo'
  | 'SendXlm'
  | 'SettingsGeneral'
  | 'SettingsPage'
  | 'SettingsProfile'
  | 'SideNav'
  | 'SimpleBuyLink'
  | 'SimpleBuyStatus'
  | 'SimpleBuyOrderSummary'
  | 'Swap'
  | 'SwapPrompt'
  | 'SwapLimitPrompt'
  | 'SwapNoHoldings'
  | 'TheExchangePage'
  | 'TradingLimits'
  | 'TransactionList'
  | 'Unknown'
  | 'WalletBalanceDropdown'
  | 'WelcomeModal'
  | 'WithdrawModal'
  | 'CurrencyList'
  | RecurringBuyOrigins

export type ModalParamPropsType = {
  [key: string]: any
  origin: ModalOriginType
}

export type ModalType = {
  options: any
  props: ModalParamPropsType
  type: ModalNameType
}

// State
export type ModalsState = Array<ModalType>

// Actions
interface CloseAllModals {
  type: typeof AT.CLOSE_ALL_MODALS
}

interface CloseModal {
  payload: {
    modalName?: ModalNameType
  }
  type: typeof AT.CLOSE_MODAL
}

interface ShowModal {
  payload: ModalType
  type: typeof AT.SHOW_MODAL
}

interface UpdateModalOptions {
  payload: {
    options: any
  }
  type: typeof AT.UPDATE_MODAL
}

export type ModalActionTypes = CloseAllModals | CloseModal | ShowModal | UpdateModalOptions
