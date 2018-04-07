//-----------------------------------------------------------------------------
// src/reducers/index.js
//-----------------------------------------------------------------------------
import {
  ADD_TRANSACTION,
} from '../actions'

const initialState = {
  transactions: [],
}

function recordTransaction(state, action) {
  console.log(`[INFO]: Record the transaction in the checkbook`)
  let newState = JSON.parse(JSON.stringify(state))
  newState.transactions.unshift(action.transaction)
  
  return newState
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_TRANSACTION:
      return recordTransaction(state, action)
    default:
      return state
  }
}

export default reducer
