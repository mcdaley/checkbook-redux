//-----------------------------------------------------------------------------
// src/components/transaction.js
//-----------------------------------------------------------------------------
import React                        from 'react'
import PropTypes                    from 'prop-types'
import TransactionView              from './transaction_view'
import EditTransaction              from '../containers/edit_transaction'

export default class Transaction extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      edit: false,
    }

    this.handleEdit     = this.handleEdit.bind(this)
    this.toggleEdit     = this.toggleEdit.bind(this)
    this.handleDelete   = this.handleDelete.bind(this)
  }

  handleEdit(e) {
    e.preventDefault()
    this.toggleEdit()
  }

  toggleEdit() {
    this.setState(prevState => ({
      edit: !prevState.edit
    }))
  }

  handleDelete(e) {
    e.preventDefault()
    console.log(`[DEBUG]: Dummy function for deleting a transaction`)
    this.props.deleteTransaction(this.props.transaction)
  }

  /****
   * Render the transaction
   */
  renderTransactionView() {
    console.log(`[DEBUG]: render TransactionView`)
    return (
      <TransactionView
        transaction   = {this.props.transaction}
        handleEdit    = {this.handleEdit}
        handleDelete  = {this.handleDelete}
      />
    )
  }

  /**** 
   * Display the inlined edit transaction form
   */
  renderEditTransactionForm() {
    console.log(`[DEBUG]: render inline edit transaction`)
    return (
      <EditTransaction
        transaction   = {this.props.transaction}
        toggleEdit    = {this.toggleEdit} 
      />
    )
  }
  
  /****
   * Render the transaction in the ledger, if in edit mode then render the 
   * edit transaction form
   */
  render() {
    return this.state.edit ? this.renderEditTransactionForm() : this.renderTransactionView()
  }
}

// PropTypes
Transaction.propTypes = {
  transaction: PropTypes.shape({
    id:           PropTypes.number.isRequired,
    date:         PropTypes.instanceOf(Date).isRequired,
    description:  PropTypes.string.isRequired,
    amount:       PropTypes.number.isRequired,
  }).isRequired,
}

