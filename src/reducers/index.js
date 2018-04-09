//-----------------------------------------------------------------------------
// src/reducers/index.js
//-----------------------------------------------------------------------------
import {
  ADD_TRANSACTION,
  UPDATE_TRANSACTION,
} from '../actions'

const initialState = {
  transactions: [
    { 
      id:           20, 
      date:         new Date("04/03/2018"), 
      description:  "Pay Day",    
      amount:       200.00 
    },
    { 
      id:           21, 
      date:         new Date("04/04/2018"), 
      description:  "Urban Putt", 
      amount:       -25.00 
    },
  ],
}

function recordTransaction(state, action) {
  console.log(`[INFO]: Record the transaction in the checkbook`)
  let newState = JSON.parse(JSON.stringify(state))
  newState.transactions.unshift(action.transaction)
  
  return newState
}

function updateTransaction(state, action) {
  /////////////////////////////////////////////////////////////////////////////
  // TODO: 04/08/2018
  // - action.transaction contains the new transaction, need to find the 
  //   transaction in state.transactions with the same id and replace it
  //   with the updated transaction.
  /////////////////////////////////////////////////////////////////////////////
  console.log(`[INFO]: Update the checkbook transaction`)
  let index = state.transactions.findIndex(
    el => { return el.id === action.transaction.id } 
  )
  let newState = JSON.parse(JSON.stringify(state))
  newState.transactions[index] = action.transaction
  return newState
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_TRANSACTION:
      return recordTransaction(state, action)
    case UPDATE_TRANSACTION:
      return updateTransaction(state, action)
    default:
      return state
  }
}

export default reducer
