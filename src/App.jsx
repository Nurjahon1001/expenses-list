import React, { useState } from "react";
const tbody = document.querySelector("tbody");
const form = document.querySelector("form");
const expenseTitle = document.getElementById("desc");
const amount = document.getElementById("amount");


function App() {
  const [expenses, setExpense] = useState([
    { description: "Food", amount: 100 },
    { description: "Rent", amount: 200 },
  ]);

  const Write = () => {
    tbody.innerHTML = "";
    expenses.map((items, index) => {
      tbody.innerHTML += `<tr>
            <td>${index + 1}</td>
            <td>${items.description}</td>
            <td>${items.amount}</td>
        </tr>`;
        
    });
  };
  Write();

  form.addEventListener("submit", (e) => {
    e.preventDefault()
    setExpense([
      ...expenses,
      {
        description: expenseTitle.value,
        amount: amount.value,
      },
    ]);
    Write()
    form.reset();
  });
 
  return <></>;
}

export default App;
