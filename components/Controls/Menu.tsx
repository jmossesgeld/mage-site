import React from "react";

export function MenuButton({ children, ...props }) {
  return <button {...props}>{children}</button>;
}

export function MenuItems({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

export default function Menu({ children }: { children: React.ReactElement[] }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const ButtonProp = children.find((child) => child.type === MenuButton);
  const { children: buttonChildren, ...props } = ButtonProp.props;

  const ItemsProp = children.filter((child) => child.type === MenuItems);
  
  return (
    <>
      <MenuButton onClick={() => setIsOpen(!isOpen)} {...props}>
        {buttonChildren}
      </MenuButton>
      {isOpen && ItemsProp}
    </>
  );
}
