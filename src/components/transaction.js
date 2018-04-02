//-----------------------------------------------------------------------------
// src/components/transaction.js
//-----------------------------------------------------------------------------
import React            from 'react'
import PropTypes        from 'prop-types'
import {formatCurrency} from '../utils/utils'

const Transaction = (props) => {
  return (
    <tr id={`transaction-id-${props.transaction.id}`}>
      <td className="text-left">  {props.transaction.date}         </td>
      <td className="text-left">  {props.transaction.description}  </td>
      <td className="text-right"> {formatCurrency(props.transaction.amount)}       </td>
      <td> {"Actions coming soon..."} </td>
    </tr>
  )
}

// PropTypes
Transaction.propTypes = {
  transaction: PropTypes.shape({
    id:           PropTypes.number.isRequired,
    date:         PropTypes.string.isRequired,
    description:  PropTypes.string.isRequired,
    amount:       PropTypes.number.isRequired,
  }).isRequired,
}

// Export component
export default Transaction

