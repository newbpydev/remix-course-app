import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import sharedStyles from "~/styles/shared.css";
import MainHeader from "./components/navigation/MainHeader";

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <Links />
      </head>

      <body>
        {/* <MainHeader /> */}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

// *                                                              Links and Meta
// @ Links
export const links: LinksFunction = () => {
  return [
    // # sharedStyles
    {
      rel: "stylesheet",
      href: sharedStyles,
    },
  ];
};

// @ Meta
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});
