import type { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

import MainHeader from "~/components/navigation/MainHeader";

import marketingStyles from "~/styles/marketing.css";
import authStyles from "~/styles/auth.css";

export default function MarketingLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: marketingStyles,
    },
    {
      rel: "stylesheet",
      href: authStyles,
    },
  ];
};
