import './ExpenseForm.css'

export default function ExpenseForm() {
    return (
        <form action="" className={'expense_form'}>
            <div className="form_input">
                <label htmlFor="txtInput">Title</label>
                <input type="text" id={'txtInput'}/>
            </div>
            <div className="form_input">
                <label htmlFor="txtAmount">Amount</label>
                <input type="number" id={'txtAmount'} min={'0.01'} step={'0.01'}/>
            </div>
            <div className="form_input">
                <label htmlFor="txtDate">Date</label>
                <input type="date" id={'txtDate'} min={'2018-01-01'} max={'2023-12-12'}/>
            </div>
            <div className={'form_submit'}>
                <input type="button" value="Add Expense"/>
            </div>
        </form>
    )
}