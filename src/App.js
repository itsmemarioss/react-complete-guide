import './App.css';
import Expenses from './components/expenses/Expenses';
import NewExpense from './components/newExpense/NewExpense';

function App() {
  const expenses = [
    {title: 'Car Insurance 1', amount: 234, date: new Date()},
    {title: 'Car Insurance 2', amount: 342, date: new Date()},
    {title: 'Car Insurance 3', amount: 432, date: new Date()}
  ];

  return (
    <div>
      <h2>Let's get started</h2>
      <NewExpense></NewExpense>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
