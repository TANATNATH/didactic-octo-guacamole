import { CoinType, SBCoreActionTypes } from 'core/types'

import * as AT from './actionTypes'

export const setSBCoreCoinData = (
  coin: CoinType,
  next: string | null,
  pendingTxsN: number
): SBCoreActionTypes => ({
  payload: {
    coin,
    next,
    pendingTxsN
  },
  type: AT.SET_SB_CORE_COIN_DATA
})
