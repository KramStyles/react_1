import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
    const ExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        console.log(expenseData)
    }
    return (
        <div>
            <ExpenseForm onSave={ExpenseHandler}/>
        </div>
    )
}

export default NewExpense;