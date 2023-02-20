import { ExpenseData } from "./expenses.server";

function isValidTitle(value: string) {
  return value && value.trim().length > 0 && value.trim().length <= 30;
}

function isValidAmount(value: string) {
  const amount = parseFloat(value);
  return !isNaN(amount) && amount > 0;
}

function isValidDate(value: string) {
  return value && new Date(value).getTime() < new Date().getTime();
}

export function validateExpenseInput(input: ExpenseData) {
  let validationErrors: ExpenseData = {};

  if (input.title && !isValidTitle(input.title)) {
    validationErrors.title =
      "Invalid expense title. Must be at most 30 characters long.";
  }

  if (input.amount && !isValidAmount(input.amount)) {
    validationErrors.amount =
      "Invalid amount. Must be a number greater than zero.";
  }

  if (input.date && !isValidDate(input.date)) {
    validationErrors.date = "Invalid date. Must be a date before today.";
  }

  if (Object.keys(validationErrors).length > 0) {
    throw validationErrors;
  }
}
