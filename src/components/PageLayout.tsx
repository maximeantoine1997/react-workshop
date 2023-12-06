import React from "react";
import { useTranslation } from "react-i18next";

interface PageLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const { t } = useTranslation();

  return <div className="min-h-screen p-8 flex flex-col">{children}</div>;
};

export default PageLayout;
