# Checkbook Built w/ React and Redux
An example program to learn how to build a React and Redux application by
creating an online checkbook for tracking all of the transactions in your 
checkbook.

# To Do
1. Add ability to delete a transaction
2. Migrate state to Immutablejs
3. Calculate credits, debits, and balance
4. Switch Amount to Charge and Payments
5. Filter transactions by credits, debits, all
    * Clicking on Credits, Debits, Balance filters transactions
6. Cleanup the reducers and look at combineReducers

# Bugs
1. Transaction.date prop-type changes between Date and String.
    * Test the deep-copy of the transaction object to see if that
      causes the Date to be converted to String


# Questions
1. Where do I add the bootstrap grid page layout?
  * Assume that this will be a component

# Requirements
## Actors
## User Stories