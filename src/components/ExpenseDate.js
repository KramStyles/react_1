export default function ExpenseDate(props) {
    let month = props.date.toLocaleString('en-US', {month: 'long'});
    let day = props.date.toLocaleString('en-US', {day: '2-digit'});
    let year = props.date.getFullYear();

    return (
        <div className={'expense_date'}>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
        </div>
    )
}