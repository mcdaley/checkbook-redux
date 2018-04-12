//-----------------------------------------------------------------------------
// src/components/account_balance_view.js
//-----------------------------------------------------------------------------
import React        from 'react'
import PropTypes    from 'prop-types'
import AmountBox    from './amount_box'

const AccountBalanceView = (props) => {
  return (
    <div className="row account-balance-row">
      <div className="col-4">
        <AmountBox  
          label   = {"Credits"} 
          total   = {props.credits}
        />
      </div>
      <div className="col-4">
        <AmountBox 
          label   = {"Debits"} 
          total   = {props.debits}
        />
      </div>
      <div className="col-4">
        <AmountBox 
          label   = {"Balance"} 
          total   = {props.balance} 
        />
      </div>
    </div>
  )
}

// Prop-Types
AccountBalanceView.propTypes = {
  credits:  PropTypes.number.isRequired,
  debits:   PropTypes.number.isRequired,
  balance:  PropTypes.number.isRequired,
}

// Export component
export default AccountBalanceView

