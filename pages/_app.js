import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../styles/reset.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/site.webmanifest" />
        <title>devchallenges</title>
      </Head>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}
