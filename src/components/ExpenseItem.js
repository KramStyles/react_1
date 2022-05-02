import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className={"expense_container"}>
            <h2>May 2<sup>nd</sup>, 2022</h2>
            <div>
                <h3>Peanuts</h3>
                <p>$3.99</p>
            </div>
        </div>
    );
}

export default ExpenseItem;