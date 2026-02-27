import { NextPage } from "next";
import { getTranslations } from "next-intl/server";
import withLocale from "@/libs/withLocale";
import LocaleSwitcher from "@/components/LocaleSwitcher";

const HomePage: NextPage = async () => {
  const t = await getTranslations("home");

  return (
    <div className="!p-16">
      <span>{t("title")}</span>
      <LocaleSwitcher />
    </div>
  );
};

export default withLocale(HomePage);
