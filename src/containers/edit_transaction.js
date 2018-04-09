//-----------------------------------------------------------------------------
// src/containers/edit_transaction.js
//-----------------------------------------------------------------------------
import { connect }              from 'react-redux'
import { updateTransaction }    from '../actions'
import EditTransactionForm      from '../components/edit_transaction_form'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch) => ({
  updateTransaction: (transaction) => {
    dispatch(updateTransaction(transaction))
  },
})

const EditTransaction = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTransactionForm)

export default EditTransaction