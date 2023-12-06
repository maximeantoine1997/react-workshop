import React from "react";

type Props = {
  condition: boolean;
  children?: React.ReactNode | React.ReactNode[];
};

const IsHiddenWhen: React.FC<Props> = ({ condition, children }) => {
  return condition ? <></> : <>{children}</>;
};

export default IsHiddenWhen;
