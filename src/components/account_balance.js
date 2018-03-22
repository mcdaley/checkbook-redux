//-----------------------------------------------------------------------------
// src/components/account_balance.js
//-----------------------------------------------------------------------------
import React        from 'react'
import PropTypes    from 'prop-types'
import AmountBox    from './amount_box'

const AccountBalance = (props) => {
  return (
    <div className="row account-balance-row">
      <div className="col-4">
        <AmountBox 
          type  = {"credit"} 
          text  = {"Credits"} 
          total = {props.credits} 
        />
      </div>
      <div className="col-4">
        <AmountBox 
          type  = {"debit"} 
          text  = {"Debits"} 
          total = {props.debits} 
        />
      </div>
      <div className="col-4">
        <AmountBox 
          type  = {"balance"} 
          text  = {"Balance"} 
          total = {props.balance} 
        />
      </div>
    </div>
  )
}

export default AccountBalance

// Prop-Types
