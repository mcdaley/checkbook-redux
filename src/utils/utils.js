//-----------------------------------------------------------------------------
// src/utils/utils.js
//-----------------------------------------------------------------------------
import numeral        from 'numeral'

// Format number into currency
export function formatCurrency(number) {
  // Return blank string if amount is empty
  if(number === null || number.length === 0) { return '' } 
  
  let     currency = numeral(number).format('$0,0.00');
  return  currency;
}
