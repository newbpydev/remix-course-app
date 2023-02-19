import type { LinksFunction } from "@remix-run/node";

import AuthForm from "~/components/auth/AuthForm";

import authStyles from "~/styles/auth.css";

function AuthPage() {
  return <AuthForm />;
}

//*                                                     Links and Meta
// export const links: LinksFunction = () => {
//   return [{ rel: "stylesheet", href: authStyles }];
// };

export default AuthPage;
