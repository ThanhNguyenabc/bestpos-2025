import { useTranslations } from "next-intl";
import Image from "next/image";
// import second from '@'
//  const Android
import ATM from "@/icons/chevron-down.svg";
import Facebook from "@/icons/facebook.svg";

export default function Home() {
  const t = useTranslations();

  return (
    <div>
      {/* <p className="">{t("footer_title")}</p> */}
      <ATM />
      <Facebook />
    </div>
  );
}
