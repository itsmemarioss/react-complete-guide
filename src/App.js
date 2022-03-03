import { useState } from 'react';
import './App.css';
import Expenses from './components/expenses/Expenses';
import Filter from './components/filter/Filter';
import NewExpense from './components/newExpense/NewExpense';

const defaultList = [
  {id:'1', title: 'Car Insurance 1', amount: 234, date: new Date(2020,1,1)},
  {id:'2', title: 'Car Insurance 2', amount: 342, date: new Date()},
  {id:'3', title: 'Car Insurance 3', amount: 432, date: new Date()}
];

function App() {

  const[expenses, setExpenses ] = useState(defaultList);

  const addExpanseHandler = expense => {
    setExpenses( (prevExpenses) => [expense, ...prevExpenses]);
  }

  return (
    <div>
      <h2>Let's get started</h2>
      <NewExpense onAddExpense={addExpanseHandler}></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
