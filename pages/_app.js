import "../styles/globals.css";
import { AuthContextProvider } from "../stores/authContext";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  );
}

export default MyApp;
