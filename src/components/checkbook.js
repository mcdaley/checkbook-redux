//-----------------------------------------------------------------------------
// src/components/checkbook.js
//-----------------------------------------------------------------------------
import React          from 'react'
import PropTypes      from 'prop-types'
import AccountBalance from './account_balance'

const Checkbook = () => {
  return (
    <div className="container-fluid">
      <h1> Checkbook </h1>
      <AccountBalance 
        credits = "250.00"
        debits  = "150.00"
        balance = "100.00" 
      />
    </div>
  )
}

export default Checkbook
