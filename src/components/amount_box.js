//-----------------------------------------------------------------------------
// src/components/amount_box.js
//-----------------------------------------------------------------------------
import React            from 'react'
import PropTypes        from 'prop-types'
import FilterLink       from '../containers/filter_link'
import {formatCurrency} from '../utils/utils'

const AmountBox = (props) => {
  function getFilter(label) {
    switch(label) {
      case  'Credits':
        return 'SHOW_CREDITS'
      case  'Debits':
        return 'SHOW_DEBITS'
      case  'Balance':
      default:
        return 'SHOW_ALL'
    }
  }

  return (
    <div className="card">
      <div className="card-header">
        <FilterLink
          label   = {props.label}
          filter  = {getFilter(props.label)}
        />

      </div>
      <div className="card-body account-card-body">
        <h5 className="card-title account-card-title">
          {formatCurrency(props.total)}
        </h5>
      </div>
    </div>
  )
}

// Prop-Types
AmountBox.propTypes = {
  label:  PropTypes.string.isRequired,
  total:  PropTypes.number.isRequired,
}

// Export component
export default AmountBox

