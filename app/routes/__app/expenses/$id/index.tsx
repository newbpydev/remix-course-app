import { useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

function ExpenseIdPage() {
  const navigate = useNavigate();

  const closeHandler = () => {
    navigate("/expenses");
  };

  return (
    <Modal onClose={closeHandler}>
      <ExpenseForm />
    </Modal>
  );
}

export default ExpenseIdPage;
