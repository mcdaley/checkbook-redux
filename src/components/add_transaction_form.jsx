//-----------------------------------------------------------------------------
// src/components/add_transaction_form.jsx
//-----------------------------------------------------------------------------
import React              from 'react'
import PropTypes          from 'prop-types'

///////////////////////////////////////////////////////////////////////////////
// BUG: 04/05/2018
// -  WHEN I ADD A TRANSACTION THE DATE IS FORMATTED AS YYYY-MM-DD INSTEAD OF
//    MM/DD/YYYY
///////////////////////////////////////////////////////////////////////////////

// Temp way to create unique transaction ids
var Global_Id_Ctr = 0

export default class AddTransactionForm extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      date:         '',
      description:  '',
      charge:       '',
      payment:      '',
      amount:       '',
      errors:       {},
    }

    this.handleDate         = this.handleDate.bind(this)
    this.handleDescription  = this.handleDescription.bind(this)
    this.handleCharge       = this.handleCharge.bind(this)
    this.handlePayment      = this.handlePayment.bind(this)
    this.resetInitialState  = this.resetInitialState.bind(this)
    this.handleSubmit       = this.handleSubmit.bind(this)
    this.handleClear        = this.handleClear.bind(this)
  }

  resetInitialState() {
    this.setState({
      date:         '',
      description:  '',
      charge:       '',
      payment:      '',
      amount:       '',
      errors:       {},
    })
  }

  handleDate(e) {
    this.setState({
      date: e.target.value,
    })
  }

  handleDescription(e) {
    this.setState({
      description: e.target.value,
    })
  }

  handleCharge(e) {
    this.setState({
      charge:   e.target.value,
      amount:   -1 * e.target.value,
      payment:  '',
    })
  }

  handlePayment(e) {
    this.setState({
      payment:  e.target.value,
      amount:   e.target.value,
      charge:   '',
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    let transaction  = {
      id:           Global_Id_Ctr++,  // Dummy unique id
      date:         new Date(this.state.date),
      description:  this.state.description,
      charge:       this.state.charge,
      payment:      this.state.payment,    
      amount:       Number(this.state.amount),
    }

    this.props.addTransaction(transaction)
    this.resetInitialState()
  }

  handleClear(e) {
    e.preventDefault()
    this.resetInitialState()
  }


  render() {
    return (
      <div className="card bg-info" style={{marginBottom: 0.50 + "rem"}}>
        <form className="card-body" style={{paddingTop: 0.50 + "rem", paddingBottom: 0 + "rem"}}>
            <div className="form-row">
              <div className="col-3">
                <label  
                  className = "sr-only"
                >
                  Date
                </label>
                <input  
                  type        = "date" 
                  onChange    = {this.handleDate}
                  className   = "form-control"
                  value       = {this.state.date} 
                >
                </input>
              </div>
              <div className="col-3">
                <label 
                  className = "sr-only"
                >
                  Description
                </label>
                <input  
                  type        = "text"
                  onChange    = {this.handleDescription}
                  className   = "form-control"
                  id          = "txnDescription" 
                  placeholder = "Description" 
                  value       = {this.state.description} 
                >
                </input>
              </div>
              <div className="col-2">
                <label 
                  className   = "sr-only"
                >
                  Charge
                </label>
                <input  
                  type        = "text"
                  onChange    = {this.handleCharge}
                  className   = "form-control"
                  id          = "txnCharge" 
                  placeholder = "Charge" 
                  value       = {this.state.charge} 
                >
                </input>
              </div>
              <div className="col-2">
                <label 
                  className   = "sr-only"
                >
                  Payment
                </label>
                <input  
                  type        = "text"
                  onChange    = {this.handlePayment}
                  className   = "form-control"
                  id          = "txnPayment" 
                  placeholder = "Payment" 
                  value       = {this.state.payment} 
                >
                </input>
              </div>
              <div className="col-2">
                <button 
                  type        = "submit" 
                  onClick     = {this.handleSubmit}
                  className   = "btn btn-primary mb-2 btn-submit"
                > 
                  Add
                </button>
                <button 
                  type        = "submit"
                  onClick     = {this.handleClear}
                  className   = "btn mb-2"
                  style       = {{marginLeft: 0.25 + "rem"}}
                > 
                  Clear
                </button>
              </div>
            </div>
          </form>
      </div>
    )
  }
}

// Prop-Types
AddTransactionForm.propTypes = {
  addTransaction: PropTypes.func.isRequired,
}
