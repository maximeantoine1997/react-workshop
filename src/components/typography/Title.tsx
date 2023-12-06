import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import React from "react";

interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return <h6 className="text-xl font-bold text-left">{children}</h6>;
};

export default Title;
