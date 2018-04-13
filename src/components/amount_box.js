//-----------------------------------------------------------------------------
// src/components/amount_box.js
//-----------------------------------------------------------------------------
import React                from 'react'
import PropTypes            from 'prop-types'
import FilterLink           from '../containers/filter_link'
import {formatCurrency}     from '../utils/utils'
import {VisibilityFilters}  from '../actions'

const AmountBox = (props) => {
  function getFilter(label) {
    switch(label) {
      case  'Credits':
        return VisibilityFilters.SHOW_CREDITS
      case  'Debits':
        return VisibilityFilters.SHOW_DEBITS
      case  'Balance':
      default:
        return VisibilityFilters.SHOW_ALL
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
      <div className={`card-body account-card-body-${props.label.toLowerCase()}`}>
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

