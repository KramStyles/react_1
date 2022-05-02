import './ExpenseItem.css';

function ExpenseItem(props) {
    let month = props.date.toLocaleString('en-US', {month: 'long'});
    let day = props.date.toLocaleString('en-US', {day: '2-digit'});
    let year = props.date.getFullYear();


    return (
        <div className={"expense_container"}>
            <pre>
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </pre>
            <div>
                <h3>{props.title} <sup>{props.id}</sup></h3>
                <p>${props.amount}</p>
            </div>
        </div>
    );
}

export default ExpenseItem;