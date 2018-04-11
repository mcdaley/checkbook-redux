//-----------------------------------------------------------------------------
// src/actions/index.js
//-----------------------------------------------------------------------------
export const ADD_TRANSACTION        = 'ADD_TRANSACTION'
export const UPDATE_TRANSACTION     = 'UPDATE_TRANSACTION'
export const DELETE_TRANSACTION     = 'DELETE_TRANSACTION'
export const SET_VISIBILITY_FILTER  = 'SET_VISIBILITY_FILTER'

export const addTransaction = (transaction) => ({
  type: ADD_TRANSACTION,
  transaction,
})

export const updateTransaction = (transaction) => ({
  type: UPDATE_TRANSACTION,
  transaction,
})

export const deleteTransaction = (transaction) => ({
  type: DELETE_TRANSACTION,
  transaction,
})

export const VisibilityFilters = {
  SHOW_ALL:     'SHOW_ALL',
  SHOW_CREDITS: 'SHOW_CREDITS',
  SHOW_DEBITS:  'SHOW_DEBITS',
}

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter,
})
