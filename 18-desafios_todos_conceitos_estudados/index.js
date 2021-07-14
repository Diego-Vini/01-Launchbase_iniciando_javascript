const user = {
  name: "Diego",
  transactions: [],
  balance: 0
};

function createTransaction(transaction){
  user.transactions.push(transaction.value)
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


console.log(user)