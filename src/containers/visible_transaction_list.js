//-----------------------------------------------------------------------------
// src/containers/visible_transaction_list.js
//-----------------------------------------------------------------------------
import { connect }          from 'react-redux'
import TransactionList      from '../components/transaction_list'

const mapStateToProps = (state) => ({
  transactions: state.transactions,
})

const  VisibleTransactionList = connect(
  mapStateToProps,
  {}
)(TransactionList)

export default VisibleTransactionList