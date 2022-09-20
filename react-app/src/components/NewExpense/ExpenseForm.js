import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(data) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  /* const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  }); */

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
    /* console.log(event.target.value); We listen every keystroke */
    /* setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    }); */
  }

  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);

    /* setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    }); */
    /* function setUserInput(prevState) {
      return {
        ...prevState,
        enteredTitle: event.target.value,
      };
    } */
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);

    /* setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    }); */
  }

  function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    //Burada veriyi NewExpense.js dosyasına aktarıyoruz
    data.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          ></input>
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          ></input>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          ></input>
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={data.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
