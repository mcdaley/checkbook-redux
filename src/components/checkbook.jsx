//-----------------------------------------------------------------------------
// src/components/checkbook.jsx
//-----------------------------------------------------------------------------
import React            from 'react'
import AccountBalance   from './account_balance'
import TransactionList  from './transaction_list'
import AddTransaction   from '../containers/add_transaction'

const transactions = [
  { id: 1, date: '03/21/2018', description: "Whole Foods", amount: -25.00 },
  { id: 2, date: '03/21/2018', description: "Starbuck",    amount:  -5.00 },
  { id: 3, date: '03/21/2018', description: "Acme",        amount: 125.00 },
]

export default class Checkbook extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      transactions: transactions,
    }

    this.addTransaction = this.addTransaction.bind(this)
  }

  addTransaction(transaction) {
    console.log(`[INFO]: Add the transaction`)
    this.setState({
      transactions: [...this.state.transactions,
                      { id:           transaction.id,
                        date:         transaction.date,
                        description:  transaction.description,
                        amount:       transaction.amount,
                      }
                    ]
    })
    return
  }

  render() {
    return (
      <div className="container-fluid">
        <h1> Checkbook </h1>
        <AccountBalance 
          credits = {250.00}
          debits  = {150.00}
          balance = {100.00}
        />
        <AddTransaction  addTransaction = {this.addTransaction} />
        <TransactionList transactions   = {this.state.transactions} />
      </div>
    )
  }
}
