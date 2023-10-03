import "@/styles/globals.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import Layout from "../components/UI/Layout";

export default function App({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      activeChain="ethereum"
      clientId="c2c1ec3b031f50949b98ed6a07730dc5"
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThirdwebProvider>
  );
}
