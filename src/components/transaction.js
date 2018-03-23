//-----------------------------------------------------------------------------
// src/components/transaction.js
//-----------------------------------------------------------------------------
import React          from 'react'
import PropTypes      from 'prop-types'

const Transaction = (props) => {
  return (
    <tr>
      <td className="text-left">  {props.transaction.date}         </td>
      <td className="text-left">  {props.transaction.description}  </td>
      <td className="text-right"> {props.transaction.amount}       </td>
      <td> {"Actions coming soon..."} </td>
    </tr>
  )
}

export default Transaction
