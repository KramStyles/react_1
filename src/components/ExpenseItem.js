import ExpenseDate from "./ExpenseDate";

import './ExpenseItem.css';
import Card from "./Card";
function ExpenseItem(props) {

    return (
        <Card className={"expense_container"}>
            <ExpenseDate date={props.date}/>
            <div className={'div'}>
                <h3>{props.title} <sup>{props.id}</sup></h3>
                <p className={'p'}>${props.amount}</p>
            </div>
        </Card>
    );
}

export default ExpenseItem;