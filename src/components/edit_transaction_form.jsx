//-----------------------------------------------------------------------------
// src/components/edit_transaction_form.js
//-----------------------------------------------------------------------------
import React          from 'react'
import PropTypes      from 'prop-types'
import {formatDate}   from '../utils/utils'

export default class EditTransactionForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      errors:       {},
      transaction:  this.props.transaction,
    }

    this.handleDate         = this.handleDate.bind(this)
    this.handleDescription  = this.handleDescription.bind(this)
    this.handleAmount       = this.handleAmount.bind(this)
    this.handleUpdate       = this.handleUpdate.bind(this)
    this.handleCancel       = this.handleCancel.bind(this)
    this.hasError           = this.hasError.bind(this)
    this.resetInitialState  = this.resetInitialState.bind(this)
    this.showErrorMessage   = this.showErrorMessage.bind(this)
  }

  resetInitialState() {
    this.setState(prevState => ({
      errors:       {},
      transaction:  this.props.transaction,
    }))
  }

  handleDate(e) {
    let transaction  = Object.assign({}, this.state.transaction)
    transaction.date = e.target.value
 
    this.setState({
      transaction: transaction,
    })
   }
 
   handleDescription(e) {
     let transaction         = Object.assign({}, this.state.transaction)
     transaction.description = e.target.value
 
     this.setState({
       transaction: transaction,
     })
   }
 
   handleAmount(e) {
     let transaction     = Object.assign({}, this.state.transaction)
     transaction.amount  = e.target.value
 
     this.setState({
       transaction: transaction,
     })
   }

   handleUpdate(e) {
    e.preventDefault()

    let transaction  = {
      id:           this.state.transaction.id,
      date:         this.state.transaction.date,
      description:  this.state.transaction.description,     
      amount:       Number(this.state.transaction.amount),
    }

    this.props.updateTransaction(transaction)
    this.props.toggleEdit()
  }

  handleCancel(e) {
    e.preventDefault()
    this.props.toggleEdit()
    this.resetInitialState()
  }

  hasError(name) {
    if(this.state.errors.hasOwnProperty(name) ) {
      return true;
    }
    return false;
  }
  
  showErrorMessage(name) {
    if(this.hasError(name)) {
      return (
        <span className="error-text">
          {this.state.errors[name][0]}
        </span>
      )
    }
  }

  /****
   * Display the inline edit transaction form
   */
  render() {
    const transaction = this.state.transaction
    
    return (
      <tr>
        <td colSpan="5">
          <form 
            className = "card-body" 
            style     = {{paddingTop: 0.50 + "rem", paddingBottom: 0 + "rem"}}
          >
            <div className = "form-row">
              <div className = "col-3">
                <label  
                  className = "sr-only"
                >
                  Date
                </label>
                <input  
                  type        = "date"
                  onChange    = {this.handleDate} 
                  className   = { this.hasError('date') ? "form-control has-error" : "form-control" } 
                  value       = {formatDate(transaction.date, 'YYYY-MM-DD')}
                  autoFocus 
                >
                </input>
                { this.showErrorMessage('date') }
              </div>
              <div className = "col-3">
                <label  
                  className = "sr-only"
                >
                  Description
                </label>
                <input  
                  type        = "text" 
                  onChange    = {this.handleDescription} 
                  className   = { this.hasError('description') ? "form-control has-error" : "form-control" }
                  id          = "txnDescription" 
                  placeholder = "Description" 
                  value       = {transaction.description} 
                >
                </input>
                { this.showErrorMessage('description') }        
              </div>
              <div className = "col-2">
                <label 
                  className = "sr-only"
                >
                  Amount
                </label>
                <input  
                  type        = "text" 
                  onChange    = {this.handleAmount} 
                  className   = { this.hasError('amount') ? "form-control has-error" : "form-control" }
                  id          = "txnAmount" 
                  placeholder = "Amount" 
                  value       = {transaction.amount} 
                >
                </input>
                { this.showErrorMessage('amount') } 
              </div>
              <div className="col-2">
                <span>
                  <button 
                    type        = "submit" 
                    onClick     = {this.handleUpdate} 
                    className   = "btn btn-sm btn-primary mb-2"
                  >
                    Save
                  </button>
                  <button 
                    type        = "submit" 
                    onClick     = {this.handleCancel} 
                    className   = "btn btn-sm btn-primary mb-2"
                    style       = { {marginLeft: 0.50 + "rem"} }
                  >
                    Cancel
                  </button>
                </span>
              </div>
            </div>
          </form>
        </td>
      </tr>
    )
  }

}  // end of EditTransactionForm