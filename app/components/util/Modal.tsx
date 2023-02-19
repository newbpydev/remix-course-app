import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

function Modal({ children, onClose }: Props) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <dialog
        className="modal"
        open
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </dialog>
    </div>
  );
}

export default Modal;
