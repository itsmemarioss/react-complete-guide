import Card from "../ui/Card";
import "./Expenses.css";
import Filter from "../filter/Filter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [year, setYear] = useState(2020);

  const onFilterChange = (newYear) => {
    setYear(newYear);
  };

  const filteredExpenses = props.items.filter(
    (ex) => ex.date.getFullYear().toString() === year
  );

  return (
    <Card className="expenses">
      <Filter onFilterChange={onFilterChange} selected={year} />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
