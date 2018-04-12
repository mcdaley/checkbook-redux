//-----------------------------------------------------------------------------
// src/components/link.js
//-----------------------------------------------------------------------------
import React                  from 'react'
import PropTypes              from 'prop-types'
import { VisibilityFilters }  from '../actions' 

export default class Link extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    this.props.setVisibilityFilter(this.props.filter)
  }

  render() {
    return (
      <a
        href    = '#'
        onClick = {this.handleClick}
      >
        {this.props.label}
      </a>
    )
  }
}
