import React from "react";
import Link from "next/link";
import Image from "next/image";
import ROUTES from "@/constants/routes";
import { Button } from "@/components/ui/button";
import NavLinks from "./navbar/NavLinks";
import { auth, signOut } from "@/auth";

const LeftSidebar = async () => {
  const session = await auth();
  console.log("Session:", session);

  return (
    <section className="custom-scrollbar background-light900_dark200 light-border shadow-light-300 sticky top-0 left-0 flex h-screen w-fit flex-col justify-between overflow-y-auto border-r p-6 pt-36 max-sm:hidden lg:w-[266px] dark:shadow-none">
      <div className="flex flex-1 flex-col gap-6">
        <NavLinks />
      </div>
      <div className="flex flex-col gap-3">
        {session?.user ? (
          <form
            className="px-10 pt-[100px]"
            action={async () => {
              "use server";
              await signOut({ redirectTo: ROUTES.SIGN_IN });
            }}
          >
            <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Image
                src="/icons/logout.svg"
                alt="Logout Icon"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className="primary-text-gradient max-lg:hidden">
                Log Out
              </span>
            </Button>
          </form>
        ) : (
          <>
            <Button
              className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none"
              asChild
            >
              <Link href={ROUTES.SIGN_IN}>
                <Image
                  src="/icons/account.svg"
                  alt="Account"
                  width={20}
                  height={20}
                  className="invert-colors lg:hidden"
                />
                <span className="primary-text-gradient max-lg:hidden">
                  Log In
                </span>
              </Link>
            </Button>
            <Button
              className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none"
              asChild
            >
              <Link href={ROUTES.SIGN_UP}>
                <Image
                  src="/icons/sign-up.svg"
                  alt="Sign Up"
                  width={20}
                  height={20}
                  className="invert-colors lg:hidden"
                />
                <span className="max-lg:hidden">Sign Up</span>
              </Link>
            </Button>
          </>
        )}
      </div>
    </section>
  );
};

export default LeftSidebar;
