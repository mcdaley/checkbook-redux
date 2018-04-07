//-----------------------------------------------------------------------------
// src/actions/index.js
//-----------------------------------------------------------------------------
export const ADD_TRANSACTION = 'ADD_TRANSACTION'

///////////////////////////////////////////////////////////////////////////////
// TODO: 04/05/2018
// -  NEED TO FIGURE OUT HOW I'M GOING TO HANDLE THE TRANSACTION.ID AS IT IS
//    NOT GENERATED WHEN ADDING TO THE DB IN THIS CASE
///////////////////////////////////////////////////////////////////////////////
//** let nextTxnId = 0

/////////////////////////////////////////////////////////////////////////////
// TODO: 04/06/2018
// - TEMPORARY HACK TO MERGE UNIQUE ID W/ THE TRANSACTION
/////////////////////////////////////////////////////////////////////////////

export const addTransaction = (transaction) => ({
  type: 'ADD_TRANSACTION',
  transaction,
})
