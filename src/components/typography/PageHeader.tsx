import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";

interface PageHeaderProps {
  children: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ children }) => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className="flex items-center gap-4">
      <ArrowUturnLeftIcon
        onClick={handleClick}
        className="w-8 h-8 cursor-pointer hover:opacity-50 transition-all"
      />
      <h1 className="text-4xl font-bold text-left">{children}</h1>
    </div>
  );
};

export default PageHeader;
