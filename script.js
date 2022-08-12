//Loan Calculator
let annualInterestCost;

document.querySelector(".verify1").addEventListener("click", function() {
  const loanAmount = document.querySelector(".inputLoanAmount").value;
  const loanTerm = (document.querySelector(".inputLoanTerm").value);
  const interestRate = (document.querySelector(".inputInterestRate").value);



  if ((loanAmount == '') || (loanTerm == '') || (interestRate == '')) {
    document.querySelector('.result1').innerHTML = `Please enter all the data.`
  }

  //parseInt = transform a string into a number
  else {
    let nrLoanAmount = parseInt(loanAmount);
    let nrLoanTerm = parseInt(loanTerm);
    let nrInterestRate = parseInt(interestRate);
    annualInterestCost = (nrLoanAmount * nrInterestRate) / 100;
    let monthlyInterestCost = annualInterestCost / 12;
    let monthlyLoan = (nrLoanAmount + annualInterestCost) / nrLoanTerm;


    document.querySelector('.result1').innerHTML = `The annual interest amount is <b>${annualInterestCost}</b> and the monthly interest amount is <b>${monthlyInterestCost}</b>. <p><p>You will have to pay monthly <b>${Math.round(monthlyLoan)}</b>.</p></p>`;
  }

});

//Deposit Calculator
let interestEarned;

document.querySelector(".verify2").addEventListener("click", function() {
  const depositAmount = document.querySelector(".inputDepositAmount").value;
  const depositTerm = (document.querySelector(".inputDepositTerm").value);
  const depositInterestRate = (document.querySelector(".inputDepositInterestRate").value);



  if ((depositAmount == '') || (depositTerm == '') || (depositInterestRate == '')) {
    document.querySelector('.result2').innerHTML = `Please enter all the data.`
  }

  //parseInt = transform a string into a number
  else {
    let nrDepositAmount = parseInt(depositAmount);
    let nrDepositTerm = parseInt(depositTerm);
    let nrDepositInterestRate = parseInt(depositInterestRate);

    interestEarned = (nrDepositAmount * (nrDepositInterestRate / 100) * nrDepositTerm);
    let outputDepositAmount = nrDepositAmount + interestEarned;

    document.querySelector('.result2').innerHTML = `Your interest earned will be <b>${interestEarned}</b>. The total amount after the deposit will be <b>${outputDepositAmount}</b>.`;
  }

});

