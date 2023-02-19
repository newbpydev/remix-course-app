import type { LoaderFunction } from "react-router";

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

// * Resource Route: This will only return resource raw data
export const loader: LoaderFunction = () => {
  return DUMMY_EXPENSES;
};
