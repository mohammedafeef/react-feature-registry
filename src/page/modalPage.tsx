import { Modal } from "@/feat";
import { AppLayout } from "@/shared/components";
import { useState } from "react";

export const ModalPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AppLayout title="Modal" link="/modal">
      <button
        onClick={handleOpen}
        className="bg-white/80 text-slate-900 px-3 py-2 ring-0 ring-gray-400 rounded text-sm hover:bg-white/90"
      >
        Open modal
      </button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <p>Modal content</p>
      </Modal>
    </AppLayout>
  );
};
