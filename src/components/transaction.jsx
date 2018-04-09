//-----------------------------------------------------------------------------
// src/components/transaction.js
//-----------------------------------------------------------------------------
import React                        from 'react'
import PropTypes                    from 'prop-types'
import EditTransactionForm          from './edit_transaction_form'
import {formatCurrency, formatDate} from '../utils/utils'

export default class Transaction extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      edit:         false,
    }

    this.handleEdit         = this.handleEdit.bind(this)
    this.toggleEdit         = this.toggleEdit.bind(this)
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

  /****
   * Render the transaction
   */
  renderTransaction() {
    return (
      <tr 
        id={`transaction-id-${this.props.transaction.id}`}
      >
        <td 
          className="text-left"
        >  
          {formatDate(this.props.transaction.date)}
        </td>
        <td 
          className="text-left"
        >  
          {this.props.transaction.description}  
        </td>
        <td 
          className="text-right"
        > 
          {formatCurrency(this.props.transaction.amount)}       
        </td>
        <td>
          <span>
            <button 
              type      = "button" 
              className = "btn btn-sm btn-primary" 
              onClick   = {this.handleEdit}
            >   
              Edit    
            </button>
            <button 
              type      = "button" 
              className = "btn btn-sm btn-danger" 
              style     = {{marginLeft: 0.50 + "rem"}}  
              onClick   = {this.handleDelete}
            > 
              Delete  
            </button>
          </span>
        </td>
      </tr>
    )
  }

  /**** 
   * Display the inlined edit transaction form
   */
  renderEditTransactionForm() {
    return (
      <EditTransactionForm
        transaction       = {this.props.transaction}
        toggleEdit        = {this.toggleEdit} 
        updateTransaction = {this.props.updateTransaction}
      />
    )
  }
  
  /****
   * Render the transaction in the ledger, if in edit mode then render the 
   * edit transaction form
   */
  render() {
    return this.state.edit ? this.renderEditTransactionForm() : this.renderTransaction()
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

