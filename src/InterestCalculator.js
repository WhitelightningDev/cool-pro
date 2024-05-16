// InterestCalculator.js
import React, { useState } from 'react';

function InterestCalculator() {
  const [totalAmount, setTotalAmount] = useState('');
  const [months, setMonths] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');
  const [totalPayment, setTotalPayment] = useState('');

  const calculatePayment = () => {
    const total = parseFloat(totalAmount);
    const numMonths = parseFloat(months);
    const interestRate = 0.20; // 20% annual interest rate

    const monthlyRate = (1 + interestRate) ** (1 / 12) - 1;
    const monthlyPayment = total * (monthlyRate / (1 - (1 + monthlyRate) ** -numMonths));
    const totalPayment = monthlyPayment * numMonths;

    setMonthlyPayment(monthlyPayment.toFixed(2));
    setTotalPayment(totalPayment.toFixed(2));
  };

  return (
    <div className="container">
      <h2>Interest Calculator</h2>
      <div className="form-group">
        <label htmlFor="totalAmount">Total Shopping Amount:</label>
        <input
          type="number"
          id="totalAmount"
          className="form-control"
          value={totalAmount}
          onChange={(e) => setTotalAmount(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="months">Number of Months:</label>
        <input
          type="number"
          id="months"
          className="form-control"
          value={months}
          onChange={(e) => setMonths(e.target.value)}
        />
      </div>
      <button className="btn btn-primary m-3" onClick={calculatePayment}>Calculate</button>
      <div className="mt-3">
        <p>Monthly Payment: ${monthlyPayment}</p>
        <p>Total Payment: ${totalPayment}</p>
      </div>
    </div>
  );
}

export default InterestCalculator;
