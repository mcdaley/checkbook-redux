//-----------------------------------------------------------------------------
// src/containers/filter_link.js
//-----------------------------------------------------------------------------
import { connect }              from 'react-redux'
import { setVisibilityFilter }  from '../actions'
import Link                     from '../components/link'

const mapStateToProps = (state, ownProps) => ({
  filter: ownProps.filter
})

const mapDispatchToProps = (dispatch) => ({
  setVisibilityFilter: (filter) => {
    dispatch(setVisibilityFilter(filter))
  },
})

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink