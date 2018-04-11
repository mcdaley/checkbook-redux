//-----------------------------------------------------------------------------
// src/components/link.js
//-----------------------------------------------------------------------------
import React            from 'react'
import PropTypes        from 'prop-types'

const Link = (props) => {
  return (
    <a
      href    = '#'
      onClick = {props.onClick}
    >
      {props.label}
    </a>
  )
}

export default Link