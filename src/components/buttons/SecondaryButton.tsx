import React from "react";
import Button, { ButtonProps } from "./Button";

const SecondaryButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      className={`py-2 w-fit text-white font-semibold bg-red-500 rounded-lg hover:bg-red-600 transition-all ${
        props.className ?? ""
      }`}
    >
      {props.children}
    </Button>
  );
};

export default SecondaryButton;
