//-----------------------------------------------------------------------------
// src/components/checkbook.jsx
//-----------------------------------------------------------------------------

import React                  from 'react'
import AccountBalance         from './account_balance'
import VisibleTransactionList from '../containers/visible_transaction_list'
import AddTransaction         from '../containers/add_transaction'
import EditTransaction        from '../containers/edit_transaction'

export default class Checkbook extends React.Component {

  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  // Handle the filter click on debits, credit, balance
  handleClick(e) {
    e.preventDefault()
    console.log(`[DEBUG]: Handle the filter transaction click`)
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
