//-----------------------------------------------------------------------------
// src/utils/utils.js
//-----------------------------------------------------------------------------
import numeral        from 'numeral'
import moment         from 'moment'

// Format date string into MM/DD/YYYYY format
export function formatDate(date, default_format = 'MM/DD/YYYY') {
  let     date_str = moment(date).format(default_format)
  return  date_str
}

// Format number into currency
export function formatCurrency(number) {
  // Return blank string if amount is empty
  if(number === null || number.length === 0) { return '' } 
  
  let     currency = numeral(number).format('$0,0.00');
  return  currency;
}
