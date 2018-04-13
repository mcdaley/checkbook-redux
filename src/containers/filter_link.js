//-----------------------------------------------------------------------------
// src/containers/filter_link.js
//-----------------------------------------------------------------------------
import { connect }              from 'react-redux'
import { setVisibilityFilter }  from '../actions'
import TransactionFilterLink    from '../components/transaction_filter_link'

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
)(TransactionFilterLink)

export default FilterLink