import {useState} from "react";

import './ExpenseForm.css'

export default function ExpenseForm() {
    // const [userInput, setUserInput] = useState({
    //     'userTitle': '',
    //     'userAmount': '',
    //     'userDate': '',
    // });

    // const TitleWatcher = (e) => {
    //     setUserInput((prevState) => {
    //         return { ...prevState, userTitle: e.target.value};
    //     })
    // }
    // const AmountWatcher = (e) => {
    //     setUserInput({...userInput, userAmount: e.target.value});
    // }
    // const DateWatcher = (e) => {
    //     setUserInput((prevState) => {
    //         return {...prevState, userDate: e.target.value}; // THis approach works better. Less likely to fail and gives you the latest snapshot
    //     })
    // }

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const TitleWatcher = (e) => setTitle(e.target.value);
    const AmountWatcher = (e) => setAmount(e.target.value);
    const DateWatcher = (e) => setDate(e.target.value);

    const SubmitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            'title': title,
            'amount': amount,
            'date': new Date(date),
        }
        console.log(expenseData)
        setTitle('')
        setAmount('')
        setDate('')
    }

    return (
        <form onSubmit={SubmitHandler} className={'expense_form'}>
            <div className="form_input">
                <label htmlFor="txtInput">Title</label>
                <input type="text" id={'txtInput'} onChange={TitleWatcher} value={title}/>
            </div>
            <div className="form_input">
                <label htmlFor="txtAmount">Amount</label>
                <input type="number" id={'txtAmount'} min={'0.01'} step={'0.01'} onChange={AmountWatcher} value={amount}/>
            </div>
            <div className="form_input">
                <label htmlFor="txtDate">Date</label>
                <input type="date" id={'txtDate'} min={'2018-01-01'} max={'2023-12-12'} onChange={DateWatcher} value={date}/>
            </div>
            <div className={'form_submit'}>
                <input type="submit" value="Add Expense"/>
            </div>
        </form>
    )
}