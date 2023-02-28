/* freeCodeCamp - JavaScript Algorithms and Data Structures - Projects - V */


/* 5. Projects - Cash Register */
/* 
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)

See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
*/
/* Solution */

function checkCashRegister(price, cash, cid) {
  let cashClasses = [
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01]];

  const INSUFFICIENT_FUNDS = {status: "INSUFFICIENT_FUNDS", change: []}
  const CLOSED = {status: "CLOSED", change: cid}
  const OPEN = {status: "OPEN", change: []}

  var totalCid = parseFloat(cid.reduce((a,b) => a + b[1], 0).toFixed(2));
  var dueBalance = parseFloat((cash - price).toFixed(2));

  if(totalCid < dueBalance) {
    return INSUFFICIENT_FUNDS;
  }

  if(totalCid == dueBalance) {
    return CLOSED;
  }

   for(let i = 0; i < cashClasses.length; i++) {
    let cashType = cashClasses[i][0];
    let cashValue = cashClasses[i][1];
    let totalCash = cid.find(item => item[0] == cashType)[1];

    if(dueBalance > cashValue && totalCash > dueBalance) {
      let pay = Math.floor(dueBalance / cashValue) * cashValue;
      dueBalance -= pay;
      dueBalance = parseFloat(dueBalance.toFixed(2));
      OPEN.change.push([cashType, pay]);      
    }else if(dueBalance > cashValue && dueBalance > totalCash) {
      dueBalance -= totalCash;
      OPEN.change.push([cashType, totalCash]);
    }
  }

  if(dueBalance > 0) {
    return INSUFFICIENT_FUNDS;
  }
  
  return OPEN;  
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);


