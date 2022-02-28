import React from "react";

import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";


const NewExpense = (props) => {
    
    const saveExpanseDataHandler = (enteredExpanseData) => {
        const expanseData = {
            ...enteredExpanseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expanseData);
    
    };

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpanseDataHandler} />
    </div>
};

export default NewExpense;
