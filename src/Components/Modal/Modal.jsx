import { Dialog } from "@headlessui/react";
import React from "react";

export const Modal = ({ isOpen, setIsOpen, children }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-[#00000093]">
        <Dialog.Panel className="w-full max-w-md rounded bg-white p-4">
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
