import {useState} from "react";

import ExpenseDate from "./ExpenseDate";

import './ExpenseItem.css';
import Card from "../UI/Card";

const ExpenseItem = (props) => {
    let [title, setTitle] = useState(props.title); //Used to update dom elements
    const changeTitle = () =>{
        setTitle('HellΩΩ')
    }

    return (
        <Card className={"expense_container"}>
            <ExpenseDate date={props.date}/>
            <div className={'div'}>
                <h3>{title} <sup>{props.id}</sup></h3>
                <div>
                    <p className={'p'}>${props.amount}</p>
                    <button onClick={changeTitle}>Change Title</button>
                </div>
            </div>
        </Card>
    );
}

export default ExpenseItem;