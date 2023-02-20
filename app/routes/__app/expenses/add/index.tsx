import { ActionFunction, redirect } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import { addExpense } from "~/data/expenses.server";

async function formGetter(form: FormData, inputName: string) {
  return (await form).get(inputName)?.toString();
}

export default function AddExpensePage() {
  const navigate = useNavigate();

  function closeHandler() {
    // navigate programmatically
    // navigate("/expenses");
    navigate("..");
  }

  return (
    <Modal onClose={closeHandler}>
      <ExpenseForm />
    </Modal>
  );
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  // const expenseData = Object.fromEntries(formData);

  const expenseData = {
    title: await formGetter(formData, "title"),
    amount: await formGetter(formData, "amount"),
    date: await formGetter(formData, "date"),

    // title: (await formData).get("title")?.toString(),
    // amount: (await formData).get('amount')?.toString(),
  };

  await addExpense(expenseData);
  return redirect("/expenses");
};
