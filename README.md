# Checkbook Built w/ React and Redux
An example program to learn how to build a React and Redux application by
creating an online checkbook for tracking all of the transactions in your 
checkbook.

# To Do
[x] 1. Add ability to delete a transaction
[x] 2. Calculate credits, debits, and balance
3. Switch Amount to Charge and Payments
[x] 4. Filter transactions by credits, debits, all
    [x] * Clicking on Credits, Debits, Balance filters transactions
5. Cleanup the reducers and look at combineReducers
6. Migrate state to Immutablejs

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