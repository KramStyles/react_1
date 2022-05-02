import './ExpenseItem.css';

function ExpenseItem(props) {

    return (
        <div className={"expense_container"}>
            <h2>{props.date.toISOString()}</h2>
            <div>
                <h3>{props.title} <sup>{props.id}</sup></h3>
                <p>${props.amount}</p>
            </div>
        </div>
    );
}

export default ExpenseItem;