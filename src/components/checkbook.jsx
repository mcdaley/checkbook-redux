//-----------------------------------------------------------------------------
// src/components/checkbook.jsx
//-----------------------------------------------------------------------------
import React                  from 'react'
import AccountBalance         from './account_balance'
import VisibleTransactionList from '../containers/visible_transaction_list'
import AddTransaction         from '../containers/add_transaction'

//** const transactions = [
//**   { id: 1, date: '03/21/2018', description: "Whole Foods", amount: -25.00 },
//**   { id: 2, date: '03/21/2018', description: "Starbuck",    amount:  -5.00 },
//**   { id: 3, date: '03/21/2018', description: "Acme",        amount: 125.00 },
//** ]

export default class Checkbook extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container-fluid">
        <h1> Checkbook </h1>
        <AccountBalance 
          credits = {250.00}
          debits  = {150.00}
          balance = {100.00}
        />
        <AddTransaction />
        <VisibleTransactionList />
      </div>
    )
  }
}
