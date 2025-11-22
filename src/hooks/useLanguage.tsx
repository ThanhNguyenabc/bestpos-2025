"use client";

import { useRouter } from "next/router";

const useLanguages = () => {
  const router = useRouter();
  const changeLanguage = (lang: string) => {};
  return {
    changeLanguage,
    locale: router.locale || "en",
  };
};
export default useLanguages;
