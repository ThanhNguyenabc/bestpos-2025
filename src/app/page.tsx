import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  return (
    <div>
      <p className="">{t("footer_title")}</p>
    </div>
  );
}
