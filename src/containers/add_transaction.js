//-----------------------------------------------------------------------------
// src/containers/add_transaction.js
//-----------------------------------------------------------------------------
import { connect }          from 'react-redux'
import { addTransaction }   from '../actions'
import AddTransactionForm   from '../components/add_transaction_form'

// EMPTY MAP-STATE-TO-PROPS FOR NOW
const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch) => ({
  addTransaction: (transaction) => {
    dispatch(addTransaction(transaction))
  },
})

const AddTransaction = connect(
  mapStateToProps, 
  mapDispatchToProps
)(AddTransactionForm)

export default AddTransaction

