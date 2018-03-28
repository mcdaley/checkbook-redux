//-----------------------------------------------------------------------------
// src/components/amount_box.js
//-----------------------------------------------------------------------------
import React        from 'react'
import PropTypes    from 'prop-types'

const AmountBox = (props) => {
  return (
    <div className="card">
      <div className="card-header">
        {props.label}
      </div>
      <div className="card-body account-card-body">
        <h5 className="card-title account-card-title">
          {props.total}
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

