import Chart from "~/components/expenses/Chart";
import type { Expense } from "~/components/expenses/ExpensesList";
import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";

const DUMMY_EXPENSES: Expense[] = [
  {
    id: "e1",
    title: "First Expense",
    amount: 12.99,
    date: new Date().toISOString(),
  },
  {
    id: "e2",
    title: ":Second Expense",
    amount: 7.87,
    date: new Date().toISOString(),
  },
];

function AnalysisPage() {
  return (
    <main>
      <Chart expenses={DUMMY_EXPENSES} />
      <ExpenseStatistics expenses={DUMMY_EXPENSES} />
    </main>
  );
}

export default AnalysisPage;
