import { Link } from "@remix-run/react";

interface Props {
  title: string;
  amount: number;
  id: string;
}

function ExpenseListItem({ id, title, amount }: Props) {
  function deleteExpenseItemHandler() {
    // tbd
  }

  return (
    <article className="expense-item">
      <div>
        <h2 className="expense-title">{title}</h2>
        <p className="expense-amount">${amount.toFixed(2)}</p>
      </div>
      <menu className="expense-actions">
        <button onClick={deleteExpenseItemHandler}>Delete</button>

        {/* Relative Path bc it doesn't start with '/' */}
        <Link to={id}>Edit</Link>
      </menu>
    </article>
  );
}

export default ExpenseListItem;
