import { useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

function AddExpensePage() {
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

export default AddExpensePage;
