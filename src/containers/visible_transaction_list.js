//-----------------------------------------------------------------------------
// src/containers/visible_transaction_list.js
//-----------------------------------------------------------------------------
import { connect }            from 'react-redux'
import { updateTransaction }  from '../actions'
import TransactionList        from '../components/transaction_list'

const mapStateToProps = (state) => ({
  transactions: state.transactions,
})

const mapDispatchToState = (dispatch) => ({
  updateTransaction: (transaction) => {
    dispatch(updateTransaction(transaction))
  },
})

const  VisibleTransactionList = connect(
  mapStateToProps,
  mapDispatchToState
)(TransactionList)

export default VisibleTransactionList