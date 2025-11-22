import { getRequestConfig } from "next-intl/server";
import { createNavigation } from "next-intl/navigation";

import { routing } from "./routing";
export default getRequestConfig(async () => {
  const locale = "en";

  return {
    locale,
    messages: (await import(`@/locales/${locale}/common.json`)).default,
  };
});
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
