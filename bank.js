document.getElementById("btn-deposite").addEventListener("click", function() {
 const depositeField= document.getElementById("deposite-field");
 const newDepositeAmountString= depositeField.value;
 const newDepositeAmount= parseFloat(newDepositeAmountString)
 const depositeTotalElement= document.getElementById("deposite-total")
 const previousDepositeTotaleString= depositeTotalElement.innerText;
 const previousDepositeTotale = parseFloat(previousDepositeTotaleString)
 depositeTotalElement.innerText=newDepositeAmount

const currentDepositeTotal= previousDepositeTotale + newDepositeAmount
depositeTotalElement.innerText=currentDepositeTotal;


const balanceTotalElement= document.getElementById("balance-total");
const previceTotalString = balanceTotalElement.innerText;
const previcetotalBalance= parseFloat(previceTotalString);
const currentBalanceTotal = newDepositeAmount + previcetotalBalance
balanceTotalElement.innerText= currentBalanceTotal;

 depositeField.value= '';
})