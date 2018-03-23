//-----------------------------------------------------------------------------
// src/components/checkbook.js
//-----------------------------------------------------------------------------
import React            from 'react'
import PropTypes        from 'prop-types'
import AccountBalance   from './account_balance'
import TransactionList  from './transaction_list'

const Checkbook = () => {

  const transactions = [
    { id: 1, date: '03/21/2018', description: "Whole Foods", amount: -25.00 },
    { id: 2, date: '03/21/2018', description: "Starbuck",    amount:  -5.00 },
    { id: 3, date: '03/21/2018', description: "Acme",        amount: 125.00 },
  ]

  return (
    <div className="container-fluid">
      <h1> Checkbook </h1>
      <AccountBalance 
        credits = {250.00}
        debits  = {150.00}
        balance = {100.00}
      />
      <TransactionList transactions={transactions} />
    </div>
  )
}

export default Checkbook
