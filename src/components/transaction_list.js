//-----------------------------------------------------------------------------
// src/components/transaction_list.js
//-----------------------------------------------------------------------------
import React          from 'react'
import PropTypes      from 'prop-types'
import Transaction    from './transaction'  

const TransactionList = (props) => {

  let rows = []
  props.transactions.forEach( (transaction) => {
    rows.push(
      <Transaction
        key               = {transaction.id}
        transaction       = {transaction}
        updateTransaction = {props.updateTransaction}
      />
    )
  })

  return (
    <table className="table table-striped table-bordered table-hover">
      <thead className="thead-light">
        <tr>
          <th className="text-left">    Created     </th>
          <th className="text-left">    Description </th>
          <th className="text-right">   Amount      </th>
          <th className="text-left">    Actions     </th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

export default TransactionList

// Prop-Types
TransactionList.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    id:           PropTypes.number.isRequired,
    date:         PropTypes.instanceOf(Date).isRequired,
    description:  PropTypes.string.isRequired,
    amount:       PropTypes.number.isRequired,
  })).isRequired,
}

