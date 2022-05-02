import ExpenseDate from "./ExpenseDate";

import './ExpenseItem.css';

function ExpenseItem(props) {

    return (
        <div className={"expense_container"}>
            <ExpenseDate date={props.date}/>
            <div className={'div'}>
                <h3>{props.title} <sup>{props.id}</sup></h3>
                <p className={'p'}>${props.amount}</p>
            </div>
        </div>
    );
}

export default ExpenseItem;