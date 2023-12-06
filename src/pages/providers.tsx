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
      <PageHeader>{t("Providers")}</PageHeader>
      <div className="grid grid-cols-2 pt-12 gap-12">
        <Editor
          height="70vh"
          theme="vs-dark"
          options={{
            copyWithSyntaxHighlighting: false,
          }}
          defaultLanguage="javascript"
          defaultValue={` /* Current Rule Provider */

const CurrentRuleProvider = (props) => {
  const { children, data } = props;
  const { input: form, onChange } = useConditionSetupForm();

  /**
   * Change the current rule inside the rules array condition setup form
   * @param input - The partial updated rule
   */
  const handleChange = (input) => {
    const oldRules = [...form.rules];
    const newRule = { ...data.rule, ...input } ;

    oldRules.splice(data.index, 1, newRule);

    onChange({ rules: oldRules });
  };

  const wrapper = useMemo(
    () => ({
      index: data.index,
      rule: data.rule,
      onChange: handleChange,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data.rule, data.index],
  );

  return <CurrentRuleContext.Provider value={wrapper}>{children}</CurrentRuleContext.Provider>;
};

/* useCurrentRule hook */

const CurrentRuleContext = React.createContext<CurrentRuleContextDefinition>({});
const useCurrentRule = () => useContext(CurrentRuleContext);


/* in RuleBuilder component */

const RuleBuilder = () => {
  const { data: rules = [], isLoading} = useRules();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      {rules.map((rule, index) => (
        <CurrentRuleProvider key={rule.id} data={{ rule, index }}>
          <RuleCard rule={rule} />
        </CurrentRuleProvider>
      ))}
    </div>
  );

};


/* in RuleCard component */

const RuleCard = ({ rule }) => {
  const { onChange } = useCurrentRule();

  const handleChange = (input) => {
    onChange(input);
  }

  return (
    <div>
      <Input value={rule.name} onChange={(e) => handleChange({ name: e.target.value })} />
    </div>
  );
}

          `}
        />
        <div className="flex flex-col gap-8">
          <Title>{t("Explanations")}</Title>
          <p>
            {t(`React providers are used to share data between components.`)}
          </p>
          <p>
            {t(
              `In this example, we have a provider that allows us to change the current rule. We also have a hook that allows us to access the current rule. We can then use these in our components to change the current rule and access the current rule.`
            )}
          </p>
          <p className="flex flex-col">
            <span className="font-semibold">{t("Rule of thumb:")} </span>
            {t(
              `Providers are a great way to share data between components. If you need to get data from the backend and share it across multiple components, use a custom hook to fetch the data and a provider to share it.`
            )}
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default UseEffectPage;
