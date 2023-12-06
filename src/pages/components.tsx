import PageLayout from "@/components/PageLayout";
import Button from "@/components/buttons/Button";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import PageHeader from "@/components/typography/PageHeader";
import Title from "@/components/typography/Title";
import React from "react";
import { useTranslation } from "react-i18next";

const ComponentsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <PageHeader>{t("Components")}</PageHeader>
      <div className="grid grid-cols-2 pt-12 ">
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-8">
            <Title>{t("Headless Button")}</Title>
            <Button>{t("Hey I am headless 🔪")}</Button>
          </div>
          <div className="flex flex-col gap-8">
            <Title>{t("Styled Button")}</Title>
            <PrimaryButton>{t("Hey I am styled 🎨")}</PrimaryButton>
            <SecondaryButton>{t("Hey I am styled 🎨")}</SecondaryButton>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <Title>{t("Explanations")}</Title>
          <p>
            {t(
              `In our approach to building a user interface, we distinguish between headless and styled components, each serving a unique purpose in the design and development process.`
            )}
          </p>
          <ul className="list-disc list-inside flex flex-col gap-4">
            <li>
              <span className="font-semibold">{t("Headless")}: </span>
              {t(
                `Think of this as the skeleton of a button — it contains the essential functionality without any styling. While headless components are highly flexible, they are not intended to be used directly in the app. Instead, they serve as a base for creating more specific components that align with your application's design system`
              )}
            </li>
            <li>
              <span className="font-semibold">{t("Styled")}: </span>
              {t(
                `This is the fleshed-out version of our button, complete with styling from Tailwind CSS. It's ready to be used throughout the application, ensuring consistency and adherence to your design standards. When building your UI, always opt for a styled component that matches the desired look and feel`
              )}
            </li>
          </ul>
          <p className="flex flex-col">
            <span className="font-semibold">
              {t("Note: Avoid Direct Usage of Headless Components in the App")}{" "}
            </span>
            {t(
              "Directly using headless components in your application can lead to inconsistent styling and more maintenance work. Always wrap them with a styled component to maintain a consistent and theme-compliant user interface. By adhering to this practice, you ensure that your application benefits from the flexibility of headless components while maintaining a uniform and professional appearance."
            )}
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default ComponentsPage;
