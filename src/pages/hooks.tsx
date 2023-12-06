import PageLayout from "@/components/PageLayout";
import React from "react";
import { useTranslation } from "react-i18next";
import Editor from "@monaco-editor/react";
import PageHeader from "@/components/typography/PageHeader";
import Title from "@/components/typography/Title";

const HooksPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <PageHeader>{t("Custom Hooks")}</PageHeader>
      <div className="grid grid-cols-2 pt-12 gap-12">
        <Editor
          height="70vh"
          theme="vs-dark"
          options={{
            copyWithSyntaxHighlighting: false,
          }}
          defaultLanguage="javascript"
          defaultValue={`import { ApiClient } from '@server/clients/ApiClient';
import { useQuery } from '@client/hooks/useQuery';

export const useAudiences = () => {
  return useQuery(async () => {
    const api = new ApiClient();

    const response = await api.audiences.listAudiences();

    return response.audiences;
  });
};

export const useAudienceMutation = () => {

  const add = async (audience) => {
    const api = new ApiClient();

    const response = await api.audiences.createAudience(audience);

    return response.audience;
  };

  return {
    add
  }
};
 
// in component
const { data: audiences, isLoading } = useAudiences();
const { add } = useAudienceMutation();

// in component method
const handleAddAudience = async (audience) => {
  try {
    await add(audience);
  } catch (error) {
    // handle error
  }
}
`}
        />
        <div className="flex flex-col gap-8">
          <Title>{t("Explanations")}</Title>
          <p>
            {t(
              `Custom hooks are a powerful tool for encapsulating logic and sharing it across components. They are a great way to extract reusable logic from components and share it across your application.`
            )}
          </p>
          <p>
            {t(
              `In this example, we have a custom hook that fetches a list of audiences from an API. We also have a custom hook that allows us to add an audience.`
            )}
          </p>
          <p>
            {t(
              `We can then use these hooks in our components to fetch audiences and add audiences.`
            )}
            {t(
              ` This allows us to reuse the logic for fetching audiences and adding audiences in multiple components.`
            )}
          </p>
          <p className="flex flex-col">
            <span className="font-semibold">{t("Rule of thumb:")} </span>
            {t(
              `When fetching data from an API, create a custom hook that fetches the data and returns it. Same goes for mutations.`
            )}
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default HooksPage;
