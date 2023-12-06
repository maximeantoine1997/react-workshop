import PageLayout from "@/components/PageLayout";
import React from "react";
import { useTranslation } from "react-i18next";
import Editor from "@monaco-editor/react";
import PageHeader from "@/components/typography/PageHeader";
import Title from "@/components/typography/Title";
import Playground from "@/Playground";

const UseEffectPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <PageHeader>{t("Playground")}</PageHeader>
      <div className="pt-12">
        <Playground />
      </div>
    </PageLayout>
  );
};

export default UseEffectPage;
