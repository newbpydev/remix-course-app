// /expenses/add

import type { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import React from "react";

import ExpensesHeader from "~/components/navigation/ExpensesHeader";

import expensesStyles from "../styles/expenses.css";

export default function ExpensesAppLayout() {
  return (
    <>
      <ExpensesHeader />
      <Outlet />
    </>
  );
}

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: expensesStyles,
    },
  ];
};
