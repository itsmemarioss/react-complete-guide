import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import './Expenses.css';

function Expenses(props) {
    const expenses = [];
    for( const expense of props.items ){
        expenses.push( 
            <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>
        );
    }
    return <Card className="expenses">{ expenses }</Card>;
}

export default Expenses;