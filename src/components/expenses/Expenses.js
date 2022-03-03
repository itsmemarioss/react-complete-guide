import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";
import './Expenses.css';
import Filter from "../filter/Filter";
import { useState } from "react";

function Expenses(props) {
    
    const [year, setYear] = useState(2020);
    
    const onFilterChange = (newYear) => {
        setYear(newYear);
    };
    
    const filteredExpenses = props.items.filter(ex => ex.date.getFullYear().toString() == year );

    return (
        <Card className="expenses">
            <Filter onFilterChange={onFilterChange} selected={year}/>
            { filteredExpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} /> ) }
        </Card>
    );
}

export default Expenses;
