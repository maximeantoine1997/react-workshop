import React, { ReactElement, cloneElement } from "react";
import IsVisibleWhen from "../conditionals/IsVisibleWhen";
import Spinner from "../spinners/Spinner";

export interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode | React.ReactNode[];
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  title?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  startIcon,
  endIcon,
  className,
  loading,
  disabled,
  title,
}) => {
  return (
    <button
      title={title}
      className={`w-fit ${className ?? ""} ${loading ? "opacity-75" : ""} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } `}
      onClick={onClick}
      disabled={disabled || loading}
    >
      <div className="flex items-center justify-center px-[1rem] gap-2 whitespace-nowrap">
        <IsVisibleWhen condition={!!loading}>
          <Spinner className="text-inherit h-5 w-5" />
        </IsVisibleWhen>
        <IsVisibleWhen condition={!!startIcon && !loading}>
          {!!startIcon && cloneElement(startIcon, { className: "h-5 w-5" })}
        </IsVisibleWhen>
        <p className={`text-sm font-normal m-0`}>{children}</p>
        <IsVisibleWhen condition={!!endIcon && !loading}>
          {!!endIcon &&
            cloneElement(endIcon as ReactElement, { className: "h-5 w-5" })}
        </IsVisibleWhen>
      </div>
    </button>
  );
};

export default Button;
