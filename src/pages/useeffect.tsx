import PageLayout from "@/components/PageLayout";
import React from "react";
import { useTranslation } from "react-i18next";
import Editor from "@monaco-editor/react";
import PageHeader from "@/components/typography/PageHeader";
import Title from "@/components/typography/Title";

const UseEffectPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <PageHeader>{t("UseEffect")}</PageHeader>
      <div className="grid grid-cols-2 pt-12 gap-12">
        <Editor
          height="70vh"
          theme="vs-dark"
          options={{
            copyWithSyntaxHighlighting: false,
          }}
          defaultLanguage="javascript"
          defaultValue={`import React, { useState, useEffect } from 'react';
import { useAudiences, useAudienceMutation } from './yourHooksPath';

const AudienceManager = () => {
  const { data: audiences, isLoading, refetch } = useAudiences();
  const { add } = useAudienceMutation();
  const [newAudienceName, setNewAudienceName] = useState('');

  useEffect(() => {
    // Effect to perform an action when the audiences list updates
    if (audiences.length > 0) {
      console.log('Updated audiences list:', audiences);
    }
  }, [audiences]); // Dependency on 'audiences'

  const handleAddAudience = async () => {
    try {
      if (!newAudienceName) return;

      await add({ name: newAudienceName });
      setNewAudienceName(''); // Reset input field

      refetch(); // Refetch audiences list after adding a new one
    } catch (error) {
      // handle error
      console.error('Error adding audience:', error);
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h2>Audience Manager</h2>
      <div className="flex items-center gap-4">
        <Input
          value={newAudienceName}
          onChange={(e) => setNewAudienceName(e.target.value)}
          placeholder={t('Audience name')}
        />
        <PrimaryButton onClick={handleAddAudience}>{t('Add')}</PrimaryButton>
      </div>
      <div>
        <h3>{t('Audiences')}</h3>
        {audiences.map(audience => <p key={audience.id}>{audience.name}</p>)}
      </div>
    </div>
  );
};
          `}
        />
        <div className="flex flex-col gap-8">
          <Title>{t("Explanations")}</Title>
          <p>
            {t(
              `The useEffect hook is used to perform side effects in a component.`
            )}
          </p>
          <p>
            {t(
              `A side effect is anything that affects something outside of the scope of the component. Common side effects include: updating the document title, setting up event listeners, fetching data, and subscribing to services.`
            )}
          </p>
          <p className="flex flex-col">
            <span className="font-semibold">{t("Rule of thumb:")} </span>
            {t(
              `If you need to fetch data on first render, use a custom hook. If you need to trigger a side effect when a prop or state changes, use useEffect.`
            )}
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default UseEffectPage;
