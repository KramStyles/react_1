import {useState} from "react";

import './ExpenseForm.css'

export default function ExpenseForm() {
    // const [title, setTitle] = useState('');
    // const [amount, setAmount] = useState('');
    // const [date, setDate] = useState('');
    //
    //
    // const TitleWatcher = (e) => setTitle(e.target.value);
    // const AmountWatcher = (e) => setAmount(e.target.value);
    // const DateWatcher = (e) => setDate(e.target.value);

    const [userInput, setUserInput] = useState({
        'userTitle': '',
        'userAmount': '',
        'userDate': '',
    });

    const TitleWatcher = (e) => {
        setUserInput({
                ...userInput, 'userTitle': e.target.value
            });
    }
    const AmountWatcher = (e) => {
        setUserInput({...userInput, 'userAmount': e.target.value});
    }
    const DateWatcher = (e) => {
        setUserInput({...userInput, 'userDate': e.target.value});
    }

    return (
        <form action="" className={'expense_form'}>
            <div className="form_input">
                <label htmlFor="txtInput">Title</label>
                <input type="text" id={'txtInput'} onChange={TitleWatcher}/>
            </div>
            <div className="form_input">
                <label htmlFor="txtAmount">Amount</label>
                <input type="number" id={'txtAmount'} min={'0.01'} step={'0.01'} onChange={AmountWatcher}/>
            </div>
            <div className="form_input">
                <label htmlFor="txtDate">Date</label>
                <input type="date" id={'txtDate'} min={'2018-01-01'} max={'2023-12-12'} onChange={DateWatcher}/>
            </div>
            <div className={'form_submit'}>
                <input type="button" value="Add Expense"/>
            </div>
        </form>
    )
}