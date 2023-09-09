import Layout from "@/components/Layout";
import type { AppProps } from "next/app";
import "@/styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
