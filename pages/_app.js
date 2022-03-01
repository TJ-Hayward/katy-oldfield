import "../styles/globals.css";
import Navbar from "../components/Header/Header";
import App from "next/app";
import Cookies from "universal-cookie";
import consts from "../consts";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContextProvider } from "../stores/authContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
    </AuthContextProvider>
  );
}

// MyApp.getInitialProps = async (appContext) => {
//   const appProps = await App.getInitialProps(appContext);

//   const cookies = new Cookies(appContext.ctx.req?.headers.cookie);
//   const password = cookies.get(consts.SiteReadCookie) ?? "";

//   if (password === "iloveibm") {
//     appProps.pageProps.hasReadPermission = true;
//   }

//   return { ...appProps };
// };

export default MyApp;
