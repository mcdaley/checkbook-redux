//-----------------------------------------------------------------------------
// src/containers/transaction_mgr.js
//-----------------------------------------------------------------------------
import { connect }              from 'react-redux'
import { deleteTransaction }    from '../actions'
import Transaction              from '../components/transaction'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch) => ({
  deleteTransaction: (transaction) => {
    dispatch(deleteTransaction(transaction))
  },
})

const TransactionMgr = connect(
  mapStateToProps,
  mapDispatchToProps
)(Transaction)

export default TransactionMgr