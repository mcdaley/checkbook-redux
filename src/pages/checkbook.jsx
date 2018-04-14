//-----------------------------------------------------------------------------
// src/components/checkbook.jsx
//-----------------------------------------------------------------------------

import React                  from 'react'
import AccountBalance         from '../containers/account_balance'
import VisibleTransactionList from '../containers/visible_transaction_list'
import AddTransaction         from '../containers/add_transaction'
import EditTransaction        from '../containers/edit_transaction'

export default class Checkbook extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container-fluid">
        <h1> Checkbook </h1>
        <AccountBalance />
        <AddTransaction />
        <VisibleTransactionList />
      </div>
    )
  }
}
