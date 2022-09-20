import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(data) {
  const [isEditing, setIsEditing] = useState(false);

  function startEditingHandler() {
    setIsEditing(true);
  }

  function stopEditingHandler() {
    setIsEditing(false);
  }

  //Bu fonksiyon sayesinde veriyi alabiliyoruz
  function saveExpenseData(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random.toString,
    };

    //Burada App.js dosyasına aktarıyoruz veriyi
    data.onAddExpense(expenseData);
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}

      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseData}
          onCancel={stopEditingHandler}
        ></ExpenseForm>
      )}
    </div>
  );
}

export default NewExpense;
