import type { LinksFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";
import { FaDownload, FaPlus } from "react-icons/fa";
import type { Expense } from "~/components/expenses/ExpensesList";
import ExpensesList from "~/components/expenses/ExpensesList";

import expensesStyles from "../styles/expenses.css";

const DUMMY_EXPENSES: Expense[] = [
  {
    id: "e1",
    title: "First Expense",
    amount: 12.99,
    date: new Date().toISOString(),
  },
  {
    id: "e2",
    title: "Second Expense",
    amount: 7.87,
    date: new Date().toISOString(),
  },
];

function ExpensesLayout() {
  return (
    <>
      <Outlet />

      <main>
        <section id="expenses-actions">
          <Link to={"add"}>
            <FaPlus />
            <span>Add Expense</span>
          </Link>

          <a href="/expenses/raw" target="_blank">
            <FaDownload />
            <span>Load Raw Data</span>
          </a>
        </section>

        <ExpensesList expenses={DUMMY_EXPENSES} />
      </main>
    </>
  );
}

// *                                            Links and Meta
//@ not needed because it is in the pathless layout (__app.tsx) file
// export const links: LinksFunction = () => {
//   return [
//     {
//       rel: "stylesheet",
//       href: expensesStyles,
//     },
//   ];
// };

export default ExpensesLayout;
