import { prisma } from "./database.server";

export interface ExpenseData {
  id?: string;
  title?: string;
  amount?: string;
  date?: string;
  dateAdded?: string;
}

export async function addExpense(expenseData: ExpenseData) {
  // export async function addExpense(expenseData) {
  try {
    return await prisma.expense.create({
      data: {
        title: expenseData.title,
        amount: +expenseData.amount,
        date: new Date(expenseData.date),
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
