//-----------------------------------------------------------------------------
// src/containers/add_transaction.jsx
//-----------------------------------------------------------------------------
import React      from 'react'
import ReactDOM   from 'react-dom'
import PropTypes  from 'prop-types'

///////////////////////////////////////////////////////////////////////////////
// TODO: 04/03/2018
// -  [x] CONVERT TO REACT COMPONENT W/ STATE
// -  [x] PASS IN THE TRANSACTIONS AND METHOD TO ADD TRANSACTOIN AS PROPS 
//        FROM CHECKBOOK.
// -  [x] ADD THE TRANSACTION TO THE EMPTY ARRAY OF TRANSACTIONS
// -  [x] IMPLEMENT THE CLEAR BUTTON
// -  MIGRATE ADD-TRANSACTION TO REDUX
//
// BUG: 04/05/2018
// -  WHEN I ADD A TRANSACTION THE DATE IS FORMATTED AS YYYY-MM-DD INSTEAD OF
//    MM/DD/YYYY
///////////////////////////////////////////////////////////////////////////////

export default class AddTransaction extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      date:         '',
      description:  '',
      amount:       '',
      errors:       {},
    }

    this.handleDate         = this.handleDate.bind(this)
    this.handleDescription  = this.handleDescription.bind(this)
    this.handleAmount       = this.handleAmount.bind(this)
    this.resetInitialState  = this.resetInitialState.bind(this)
    this.handleSubmit       = this.handleSubmit.bind(this)
    this.handleClear        = this.handleClear.bind(this)
  }

  resetInitialState() {
    this.setState({
      date:         '',
      description:  '',
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

  handleAmount(e) {
    this.setState({
      amount: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    let transaction  = {
      id:           20,                 // Dummy non-unique id
      date:         this.state.date,
      description:  this.state.description,     
      amount:       this.state.amount,
    }

    this.props.addTransaction(transaction)
    this.resetInitialState()
  }

  handleClear(e) {
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
              <div className="col-5">
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
                  Amount
                </label>
                <input  
                  type        = "text"
                  onChange    = {this.handleAmount}
                  className   = "form-control"
                  id          = "txnAmount" 
                  placeholder = "Amount" 
                  value       = {this.state.amount} 
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
AddTransaction.propTypes = {
  addTransaction: PropTypes.func.isRequired,
}
