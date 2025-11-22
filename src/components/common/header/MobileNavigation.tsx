"use client";

import { Button } from "@/components/ui/button";
import Flex from "@/components/ui/flex";
import { cn } from "@/lib/utils";
import IcMenu from "@/icons/menu.svg";
import IcBack from "@/icons/left.svg";
import IcChevronRight from "@/icons/chevron-right.svg";
import IcClose from "@/icons/close.svg";
import Image from "next/image";
import { ReactElement, useEffect, useMemo, useState } from "react";
import { MENU } from "./navigation_items";
import { COMPANY_MENU } from "@/utils/constants";
import Text from "@/components/ui/text";
import Row from "@/components/ui/row";
import Col from "@/components/ui/col";
import { useTranslations } from "next-intl";
import { RouteConfig } from "@/utils/routes";
import { LogoSmallIcon } from "@/assets/Images";
import Heading, { BaseHeadingStyles } from "@/components/ui/heading";
import { AnimatePresence, motion } from "motion/react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Languages } from "@/utils/languages";
import { useRouter } from "next/navigation";
import { Link } from "@/i18n/request";

const CompanyMenu = () => {
  const t = useTranslations();
  return (
    <>
      {COMPANY_MENU.map((item) => (
        <Link key={item.href} href={item.href} prefetch={false}>
          <Text className=" text-lg font-semibold">{t(item.title)}</Text>
        </Link>
      ))}
    </>
  );
};
const MOBILE_MENU = [
  {
    key: RouteConfig.Home,
    label: "home",
  },
  ...MENU,
  {
    key: "company",
    label: "company",
    child: <CompanyMenu />,
  },
];
type MenuItem = (typeof MOBILE_MENU)[number];
const MobileNavigation = () => {
  const t = useTranslations();

  const route = useRouter();
  // const { changeLanguage } = useTrans();

  const [selectedItem, setItem] = useState<MenuItem | null>(null);

  const [isOpen, onOpen] = useState(false);
  useEffect(() => {
    // const changeEvent = () => {
    //   isOpen && onOpen(false);
    //   setItem(null);
    // };
    // route.events.on("routeChangeStart", changeEvent);
    // return () => route.events.off("routeChangeStart", changeEvent);
  }, [isOpen]);

  const hideMenu = () => setItem(null);
  const openMenu = () => onOpen(true);
  const closeDrawer = () => onOpen(false);

  const onMenuClick = (item: (typeof MOBILE_MENU)[number]) => {
    if (item.child) {
      return setItem(item);
    }
    if (item.key) route.push(item.key);
  };

  const LanguageComponents = useMemo(() => {
    const Components: ReactElement[] = [];
    Languages.forEach(({ label, icon: Icon }, locale) => {
      Components.push(
        <Link href={""} locale={locale}>
          <Icon className="w-6 h-6" />
          <Text className=" font-semibold">{label}</Text>
        </Link>
        // <Button
        //   key={label}
        //   variant={"ghost"}
        //   // onClick={() => changeLanguage(locale)}
        //   className="gap-2"
        // >
        //   <Icon className="w-6 h-6" />
        //   <Text className=" font-semibold">{label}</Text>
        // </Button>
      );
    });

    return Components;
  }, []);

  return (
    <>
      <Drawer direction="left" open={isOpen}>
        <DrawerTrigger onClick={openMenu}>
          <IcMenu className="w-6 h-6" />
        </DrawerTrigger>
        <DrawerContent
          draggable={false}
          className=" md:max-w-[200px] rounded-none bg-white top-0 left-0 h-full mt-0 px-4"
        >
          <Flex className=" justify-between items-center px-4 pb-4 border-b-1 border-b-neutral-300">
            <Image
              alt="logo"
              width={34}
              height={30}
              quality={100}
              src={LogoSmallIcon}
              className="h-full"
            />
            <button className="p-4" onClick={closeDrawer}>
              <IcClose className="w-6 h-6" />
            </button>
          </Flex>
          <Row className="py-6 justify-around">{LanguageComponents}</Row>

          <Col className=" relative gap-6 mt-8 flex-1 overflow-hidden">
            {MOBILE_MENU.map((item) => (
              <Button
                key={item.key}
                variant={"ghost"}
                className=" justify-between"
                onClick={() => onMenuClick(item)}
              >
                <Text className="font-semibold text-lg">{t(item.label)}</Text>
                {item.child && <IcChevronRight className="w-6 h-6" />}
              </Button>
            ))}
            <AnimatePresence>
              {selectedItem && (
                <motion.div
                  className="absolute overflow-hidden gap-4 w-full bg-white h-full"
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    animationDuration: 0.5,
                    transition: { ease: "easeInOut" },
                  }}
                  exit={{
                    animationDuration: 0.5,
                    opacity: 0,
                    x: "100%",
                  }}
                >
                  <Row className="items-center ">
                    <button className="pr-8 pl-2" onClick={hideMenu}>
                      <IcBack className="w-6 h-6" />
                    </button>
                    <Heading
                      type="h4"
                      className={BaseHeadingStyles["card-heading"]}
                    >
                      {t(selectedItem.label)}
                    </Heading>
                  </Row>
                  <div
                    className={cn(
                      "grid gap-4 mt-6 grid-cols-1 max-h-[90%] overflow-y-auto",
                      selectedItem.key === RouteConfig.BusinessTypes &&
                        "grid-cols-2"
                    )}
                  >
                    {selectedItem.child}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Col>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileNavigation;
