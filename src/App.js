import ExpenseItem from "./components/ExpenseItem";

function App() {
    const expenses = [
        {'id': 1, 'title': 'Toilet Paper', amount: 0.99, 'date': new Date(2021, 11, 12)},
        {'id': 2, 'title': 'Groceries', amount: 17.99, 'date': new Date(2021, 1, 2)},
        {'id': 3, 'title': 'Internet', amount: 10.49, 'date': new Date(2021, 4, 5)},
        {'id': 4, 'title': 'Leisure', amount: 5.99, 'date': new Date(2021, 11, 12)},
    ]
    const details = expenses.map(items => {
        return <ExpenseItem title={items.title} id={items.id} date={items.date} amount={items.amount}/>
    })
    return (
        <div className={'main_container'}>
            {details}
        </div>
    );
}

export default App;
