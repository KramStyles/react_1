import ExpenseItem from "./components/ExpenseItem";

function App() {
    const expenses = [
        {'id': 1, 'title': 'Toilet Paper', amount: 0.99, 'date': new Date(2021, 11, 12)},
        {'id': 2, 'title': 'Groceries', amount: 17.99, 'date': new Date(2021, 1, 2)},
        {'id': 3, 'title': 'Internet', amount: 10.49, 'date': new Date(2021, 4, 5)},
        {'id': 4, 'title': 'Leisure', amount: 5.99, 'date': new Date(2021, 11, 12)},
    ]
    return (
        <div>
            <h1>Hello and Good morning</h1>
            <ExpenseItem title={expenses[0].title} id={expenses[0].id} date={expenses[0].date} amount={expenses[0].amount}/>
        </div>
    );
}

export default App;
