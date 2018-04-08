//-----------------------------------------------------------------------------
// src/containers/edit_transaction.js
//-----------------------------------------------------------------------------
import { connect }              from 'react-redux'
import { updateTransaction }    from '../actions'
import Transaction              from '../components/transaction'

const mapStateToProps = (state, ownProps) => ({
  transaction: state.transactions
})

const mapDispatchToProps = (dispatch) => ({
  updateTransaction: (transaction) => {
    dispatch(updateTransaction(transaction))
  },
})

const EditTransaction = connect(
  mapStateToProps, 
  {}
)(Transaction)

export default EditTransaction