//-----------------------------------------------------------------------------
// src/reducers/index.js
//-----------------------------------------------------------------------------
import moment         from 'moment'

import {
  ADD_TRANSACTION,
  UPDATE_TRANSACTION,
} from '../actions'

/**/
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
/*/

/**
const initialState = {
  transactions: [],
}
*/

function recordTransaction(state, action) {
  console.log(`[INFO]: Record the transaction in the checkbook`)
  let newState = JSON.parse(JSON.stringify(state))
  newState.transactions.unshift(action.transaction)
  
  return newState
}

///////////////////////////////////////////////////////////////////////////////
// TODO: 04/08/2018
//
// [x] -  IMPLEMENT UPDATING OF TRANSACTIONS BY:
//    [x] 1.) HOOK UP THE MAP-PROPS AND MAP-DISPATCH TO STATES IN CONTAINERS
//    [x] 2.) HOOK UP UPDATE TO CALL THIS REDUCER
//    [x] 3.) ITERATE THROUGH LIST AND UPDATE THE TRANSACTION
//    [x] 4.) VERIFY THAT UPDATES ARE WORKING AS EXPECTED
//
// - CLEANUP CODE
//    1.) FIX THE DATE ISSUE IN THE EDIT TRANSACTIONS
//    2.) IMPLEMENT IMMUTABLEJS FOR HANDLING DATA STRUCTURES
//
// - REFACTOR TRANSACTION CODE
//   Currently, I'm passing in the updateTransaction as a property to the
//   Transaction component which seems incorrect in a react-redux app. Want 
//   to create a separate EditTransaction component for handling updates
//    1.) CREATE A SEPARATE EDIT_TRANSACTION_FORM COMPONENT AND THEN MAP THE
//        UPDATE-TRANSACTION ACTION TO THE EDIT_TRANSACTION_FORM
//    2.) CHANGE THE TRANSACTION RENDER TO RENDER THE EDIT_TRANSACTION_FORM
//        INSTEAD OF THE HARD-CODED FORM
//    3.) MAY BE A PATTERN TO SPLIT TRANSACTION INTO TRANSACTION_VIEW?
///////////////////////////////////////////////////////////////////////////////
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
