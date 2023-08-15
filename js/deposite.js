// 1: add even listener to the deposite button
// 2. get deposite amount from the deposite input field
// 2.5 convert string deposite amount to anumber type
// 3. clear the deposite input field after getting the value
// 4.get the previous deposite total
// 5. calculate new deposite total and set the value to the deposite total
// 6.get curent balance
// 7.calculate the new balance and set it to the balance total element

// step-1:
document.getElementById('btn-deposite').addEventListener("click",function(){
    // step-2
    const depositeField = document.getElementById("deposite-field");
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);
    // console.log(newDepositeAmount);



    // step-3
    depositeField.value = '';
    // step-4
    const depositeTotalElement = document.getElementById('deposite-total');
    const previousDepositeTotalString = depositeTotalElement.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalString);

    // step-5:
    const newDepositeTotal = previousDepositeTotal + newDepositeAmount;
    depositeTotalElement.innerText = newDepositeTotal;

    // step-6
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previopusbalanceTotalAmount = parseFloat(previousBalanceTotalString);

    // step-7
    const newBalanceTotal = previopusbalanceTotalAmount + newDepositeTotal;
    balanceTotalElement.innerText = newBalanceTotal;














})