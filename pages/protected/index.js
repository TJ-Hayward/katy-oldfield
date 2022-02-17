import Head from "next/head";
import { useRouter } from "next/router";
import Login from "../../components/login/login";

export default function Protected({ hasReadPermission }) {
  const router = useRouter();

  if (!hasReadPermission) {
    return <Login redirectPath={router.asPath} />;
  }
  if (!hasReadPermission) {
    return <div>Access denied.</div>;
  }

  return (
    <div>
      <Head>
        <title>Protected Page</title>
      </Head>

      <main>I am supposed to be protected.</main>
    </div>
  );
}
