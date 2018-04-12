//-----------------------------------------------------------------------------
// src/containers/visible_transaction_list.js
//-----------------------------------------------------------------------------
import { connect }            from 'react-redux'
import TransactionList        from '../components/transaction_list'
import { updateTransaction, 
         VisibilityFilters }  from '../actions'

/**** 
 * Filters the transactoins to display in the checkbook based on the 
 * filter which can be to show all, debits, or credits
*/
const getVisibleTransactions = (transactions, filter) => {
  switch(filter) {
    case VisibilityFilters.SHOW_DEBITS:
      return transactions.filter(txn => txn.amount < 0)
    case VisibilityFilters.SHOW_CREDITS:
      return transactions.filter(txn => txn.amount >= 0)
    case VisibilityFilters.SHOW_ALL:
    default:
      return transactions
  }
}

const mapStateToProps = (state) => ({
  transactions: getVisibleTransactions(state.transactions, state.visibilityFilter),
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