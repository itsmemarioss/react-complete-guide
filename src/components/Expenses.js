import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    const expenses = [];
    for( const expense of props.expenses ){
        expenses.push( 
            <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>
        );
    }
    return <div>{ expenses }</div>;
}

export default Expenses;