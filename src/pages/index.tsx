import Image from "next/image";
import { Inter } from "next/font/google";
import CategoryCard from "@/components/cards/CategoryCard";
import { useTranslation } from "react-i18next";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { t } = useTranslation();

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center gap-16 p-24 ${inter.className}`}
    >
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-4 justify-center justify-start !text-left w-full">
          <h1 className="text-4xl font-bold text-left">
            {t("Welcome to the React Workshop 🎉")}
          </h1>
          <p className="text-xl font-semibold text-left opacity-50">
            {t("Each section has a different focus to help you learn React")}
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <CategoryCard
            title={t("Components")}
            description={t("Headless vs styled components")}
            to="/components"
          />
          <CategoryCard
            title={t("Hooks")}
            description={t("React hooks")}
            to="/hooks"
          />
          <CategoryCard
            title={t("UseEffect")}
            description={t("React useEffect")}
            to="/useeffect"
          />
          <CategoryCard
            title={t("Playground")}
            description={t("Create your own components")}
            to="/playground"
          />
        </div>
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            {t("You can even create your own components in the playground 🍻")}
          </p>
        </div>
      </div>
    </main>
  );
}
