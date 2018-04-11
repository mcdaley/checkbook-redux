//-----------------------------------------------------------------------------
// src/components/transaction_view.js
//-----------------------------------------------------------------------------
import React                        from 'react'
import PropTypes                    from 'prop-types'
import {formatCurrency, formatDate} from '../utils/utils'

const TransactionView = (props) => {
  return (
    <tr 
      id={`transaction-id-${props.transaction.id}`}
    >
      <td 
        className="text-left"
      >  
        {formatDate(props.transaction.date)}
      </td>
      <td 
        className="text-left"
      >  
        {props.transaction.description}  
      </td>
      <td 
        className="text-right"
      > 
        {formatCurrency(props.transaction.amount)}       
      </td>
      <td>
        <span>
          <button 
            type      = "button" 
            className = "btn btn-sm btn-primary" 
            onClick   = {props.handleEdit}
          >   
            Edit    
          </button>
          <button 
            type      = "button" 
            className = "btn btn-sm btn-danger" 
            style     = {{marginLeft: 0.50 + "rem"}}  
            onClick   = {props.handleDelete}
          > 
            Delete  
          </button>
        </span>
      </td>
    </tr>
  )
}

// Export
export default TransactionView

// Prop-Types
