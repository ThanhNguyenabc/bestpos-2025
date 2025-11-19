// import { getSEOTags } from "@/pages/api/configs";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// export const commonServerSideProps = async (
//   page: string,
//   locale: string = "en",
//   revalidate = 0,
//   translations?: string[]
// ) => {
//   const trans = [...(translations || []), "common", "questionnaire"];
//   const [seoTag, translation] = await Promise.all([
//     getSEOTags(page, locale),
//     serverSideTranslations(locale, trans),
//   ]);

//   const data = {
//     props: {
//       seoTag: seoTag,
//       ...translation,
//     },
//   };
//   if (revalidate > 0) data["revalidate"] = revalidate;
//   return data;
// };
