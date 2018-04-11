//-----------------------------------------------------------------------------
// src/reducers/index.js
//-----------------------------------------------------------------------------
import {
  ADD_TRANSACTION,
  UPDATE_TRANSACTION,
  DELETE_TRANSACTION,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
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
  visibilityFilter: VisibilityFilters.SHOW_ALL,
}

function recordTransaction(state, action) {
  console.log(`[INFO]: Record the transaction in the checkbook`)
  let newState = JSON.parse(JSON.stringify(state))
  newState.transactions.unshift(action.transaction)
  
  return newState
}

function updateTransaction(state, action) {
  console.log(`[INFO]: Update the checkbook transaction`)
  let index = state.transactions.findIndex(
    el => { return el.id === action.transaction.id } 
  )
  let newState                  = JSON.parse(JSON.stringify(state))
  newState.transactions[index]  = action.transaction
  return newState
}

function deleteTransaction(state, action) {
  console.log(`[INFO]: Delete transaction`)
  let index = state.transactions.findIndex(
    el => { return el.id === action.transaction.id }
  )
  let newState = JSON.parse(JSON.stringify(state))
  newState.transactions.splice(index, 1)
  return newState
}

function visibilityFilter(state, action) {
  console.log(`[INFO]: Filter the transaction list`)
  let newState              = JSON.parse(JSON.stringify(state))
  newState.visibilityFilter = action.filter
  return newState
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_TRANSACTION:
      return recordTransaction(state, action)
    case UPDATE_TRANSACTION:
      return updateTransaction(state, action)
    case DELETE_TRANSACTION:
      return deleteTransaction(state, action)
    case SET_VISIBILITY_FILTER:
      return visibilityFilter(state, action)
    default:
      return state
  }
}

export default reducer
