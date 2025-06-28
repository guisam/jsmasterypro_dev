"use client";

import React from "react";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SheetClose } from "@/components/ui/sheet";

const NavLinks = ({ isMobileNav = false }: { isMobileNav?: boolean }) => {
  const pathname = usePathname();
  const userId: number = 1;

  const resolvedLinks = sidebarLinks
    .filter((link) => link.label !== "Profile" || userId)
    .map((link) => {
      if (link.label === "Profile" && typeof link.route === "function") {
        return { ...link, route: link.route(userId) };
      }
      return link;
    })
    .filter((link) => typeof link.route === "string");

  return (
    <>
      {resolvedLinks.map((link) => {
        const isActive =
          (typeof link.route === "string" &&
            pathname.includes(link.route) &&
            link.route.length > 1) ||
          pathname === link.route;

        const LinkComponent = (
          <Link
            href={link.route}
            key={link.label}
            className={cn(
              isActive
                ? "primary-gradient text-light-900 rounded-lg"
                : "text-dark300_light900",
              "flex items-center justify-start gap-4 bg-transparent p-4",
            )}
          >
            <Image
              src={link.imgUrl}
              alt={link.label}
              width={20}
              height={20}
              className={cn({ "invert-colors": !isActive })}
            />
            <p
              className={cn(
                isActive ? "base-bold" : "base-medium",
                !isMobileNav && "max-lg:hidden",
              )}
            >
              {link.label}
            </p>
          </Link>
        );

        return isMobileNav ? (
          <SheetClose asChild key={link.route}>
            {LinkComponent}
          </SheetClose>
        ) : (
          <React.Fragment key={link.route}>{LinkComponent}</React.Fragment>
        );
      })}
    </>
  );
};

export default NavLinks;
