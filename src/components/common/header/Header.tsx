"use client";
// import { PhoneIcon } from "@/ui/img-resource/ExIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Static import for critical navigation components
import { PHONE } from "@/utils/constants";
import Text from "@/components/ui/text";
import Flex from "@/components/ui/flex";
import { RouteConfig } from "@/utils/routes";
import { LogoFullIcon, LogoSmallIcon } from "@/assets/Images";
import { useDevice } from "@/hooks/useDevice";
import DeskTopNavigation from "./DeskTopNavigation";
import MobileNavigation from "./MobileNavigation";

const Header = () => {
  const { isMobile } = useDevice();

  return (
    <header className="container max-w-[1440px]">
      <Flex className="flex p-4 gap-4 items-center">
        {isMobile && <MobileNavigation />}

        <Link href={RouteConfig.Home} className="flex-1 lg:flex-initial">
          {isMobile ? (
            <Image
              alt="BestPOS Logo Small"
              suppressHydrationWarning
              width={34}
              height={30}
              quality={100}
              src={LogoSmallIcon}
              className="h-full"
            />
          ) : (
            <Image
              alt="BestPOS Logo Full"
              suppressHydrationWarning
              width={180}
              height={40}
              src={LogoFullIcon}
              quality={90}
            />
          )}
        </Link>

        {!isMobile && <DeskTopNavigation className="flex-1" />}

        <Link
          href={`tel:${PHONE}`}
          className="flex items-center p-2 gap-2 flex-row md:p-3 md:gap-3 border-2 border-orange-500 rounded-lg"
        >
          <Image
            width={24}
            height={24}
            src={"/color-icons/phone.svg"}
            alt="phone"
          />
          <Text className="text-sm-semibold text-center">{PHONE}</Text>
        </Link>

        {/* <LanguageToggle /> */}
      </Flex>
    </header>
  );
};

// Enable static optimization
export default React.memo(Header);
