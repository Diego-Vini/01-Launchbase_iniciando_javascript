const user = {
  name: "Diego",
  transactions: [],
  balance: 0
};

function createTransaction(transaction){
  user.transactions.push(transaction)
  if(transaction.type == 'credit'){
      user.balance = user.balance + transaction.value
      
  } else if (transaction.type =='debit'){
    user.balance = user.balance - transaction.value
  }
}

function getHigherTransactionByType(transactionType){

}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

function getHigherTransactionByType(type){
    let pushValue
    let startValue = 0;
    for(let transaction of user.transactions ){
    if(transaction.type == type && transaction.value > startValue){
        startValue = transaction.value
        pushValue = transaction
    }
    }
    return pushValue;
}

function getAverageTransactionValue() {
  let count = user.transactions.length
  let sum = 0
  for(let transaction of user.transactions){
    sum = sum + transaction.value
  }
  
  return sum / count
}

console.log(user)
console.log('Maior transação de crédito: ', getHigherTransactionByType('credit'))
console.log('Maior transação de débito: ', getHigherTransactionByType('debit'))
console.log('A média das transações de crédito e débito é: ', getAverageTransactionValue())
