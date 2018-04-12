//-----------------------------------------------------------------------------
// src/containers/account_balance.js
//-----------------------------------------------------------------------------
import { connect }              from 'react-redux'
import AccountBalanceView       from '../components/account_balance_view'

const credits = (transactions) => {
  let payments = transactions.filter( (txn) => txn.amount >= 0 )
                             .reduce( (total, t) => total + t.amount, 0)
  return payments
}

const debits = (transactions) => {
  let charges = transactions.filter( (txn) => txn.amount < 0 )
                             .reduce( (total, t) => total + t.amount, 0)
  return charges
}

const balance = (transactions) => {
  let     balance = transactions.reduce( (total, t) => total + t.amount, 0)
  return  balance
}

const mapStateToProps = (state, ownProps) => ({
  credits: credits(state.transactions),
  debits:  debits(state.transactions),
  balance: balance(state.transactions),
})

const mapDispatchToState = (dispatch) => ({
})

const  AccountBalance = connect(
  mapStateToProps,
  mapDispatchToState
)(AccountBalanceView)

export default AccountBalance
