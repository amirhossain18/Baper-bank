document.getElementById("btn-withdrow").addEventListener ("click", function() {
    const withdrowField= document.getElementById("withdrow-field");
    const newWithdrowAmountString= withdrowField.value
    const newWithdrowAmount= parseFloat(newWithdrowAmountString);
    const withdrowTotalElement= document.getElementById("withdrow-total");
    const previousWithdrowTotalString= withdrowTotalElement.innerText;
    const previousWithdrowTotal = parseFloat(previousWithdrowTotalString);
   const currentTotalWithdrow = previousWithdrowTotal +newWithdrowAmount;
   withdrowTotalElement.innerText = currentTotalWithdrow;
    const balanceTotalElement = document.getElementById('balance-total');
    const previceBalanceTotalString = balanceTotalElement.innerText;
    const previceBalanceTotal = parseFloat(previceBalanceTotalString);
    const newBalanceTotal= previceBalanceTotal - newWithdrowAmount;
    balanceTotalElement.innerText= newBalanceTotal;
    withdrowField.value=''; 
})

document.getElementById("btn-logput").addEventListener ("click", function() {
    window.location.href="login.html"
})