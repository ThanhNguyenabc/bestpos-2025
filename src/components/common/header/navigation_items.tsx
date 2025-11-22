import Col from "@/components/ui/col";
import Text from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { BUSINESS_MENU } from "@/utils/business_menu";
import { NavigationLabel } from "@/utils/constants";
import { PRODUCTS_MENU } from "@/utils/product_menu";
import { RouteConfig } from "@/utils/routes";
import { SOLUTIONS_MENU } from "@/utils/solutions_menu";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";

const BaseHeaderCard = ({
  children,
  href,
  className,
}: PropsWithChildren<{ href: string; className?: string }>) => {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex w-full bg-neutral-100 rounded-2xl overflow-hidden gap-2 items-center border-2 border-neutral-100 hover:border-primary",
        className
      )}
    >
      {children}
    </Link>
  );
};

const SolutionCard = ({
  title,
  href,
  src,
  description,
}: (typeof SOLUTIONS_MENU)[number]) => {
  const t = useTranslations();
  return (
    <BaseHeaderCard href={href}>
      <Col className="flex-1 p-4 gap-1">
        <Text className="text-base font-semibold">{t(title)}</Text>
        <Text className=" text-sm text-neutral-600">{t(description)}</Text>
      </Col>
      <Image
        width={150}
        height={150}
        alt={src}
        src={src}
        className=" w-[100px] aspect-square md:w-[150px]"
      />
    </BaseHeaderCard>
  );
};

const BusinessCard = ({ title, href, src }: (typeof BUSINESS_MENU)[number]) => {
  const t = useTranslations();
  return (
    <BaseHeaderCard href={href} className="h-[140px] md:h-[200px] relative ">
      <div className="absolute w-full h-full bg-linear-to-b from-[rgb(0_0_0/0%)] to-[rgb(0_0_0/60%)]"></div>
      <Text className="absolute left-3 bottom-3 md:left-5 md:bottom-5 text-white font-semibold text-base md:text-lg">
        {t(title)}
      </Text>
      <Image
        alt=""
        quality={100}
        width={386}
        height={200}
        src={src}
        className="w-full h-full object-cover"
      />
    </BaseHeaderCard>
  );
};

const PorductCard = ({ title, href, src }: (typeof PRODUCTS_MENU)[number]) => {
  const t = useTranslations();
  return (
    <BaseHeaderCard href={href}>
      <Image width={80} height={80} alt={src} src={src} />
      <Text className="font-semibold text-base">{t(title)}</Text>
    </BaseHeaderCard>
  );
};

export const MENU = [
  {
    key: RouteConfig.Solution,
    label: NavigationLabel.Solutions,
    child: (
      <>
        {SOLUTIONS_MENU?.map((item) => (
          <SolutionCard key={item.href} {...item} />
        ))}
      </>
    ),
  },
  {
    key: RouteConfig.BusinessTypes,
    label: NavigationLabel.BusinessTypes,
    child: (
      <>
        {BUSINESS_MENU?.map((item) => (
          <BusinessCard key={item.href} {...item} />
        ))}
      </>
    ),
  },
  {
    key: RouteConfig.Products,
    label: NavigationLabel.Products,
    child: (
      <>
        {PRODUCTS_MENU?.map((item) => (
          <PorductCard key={item.href} {...item} />
        ))}
      </>
    ),
  },
  {
    key: RouteConfig.POSSystems,
    label: NavigationLabel.Pos_systems,
  },
];
