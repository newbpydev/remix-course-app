import type { LoaderFunction } from "@remix-run/node";
import { redirect, Response } from "@remix-run/node";

// * Splat routes: it will catch all routes that does not match
// * it can be put in any route directory to catch all that don't match
export const loader: LoaderFunction = ({ params }) => {
  // console.log(params);
  if (params["*"] === "exp") {
    return redirect("/expenses");
  }
  throw new Response("Not found", { status: 404 });
  // return null;
};
