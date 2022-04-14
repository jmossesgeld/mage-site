import { Transition } from "@headlessui/react";
import React from "react";

export default function Menu({ children, label, ...props }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  console.log(isOpen);

  return (
    <div className="relative">
      <button onClick={toggle} {...props}>
        {label}
      </button>
      <Transition
        show={isOpen}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div onClick={toggle}>{children}</div>
      </Transition>
    </div>
  );
}
