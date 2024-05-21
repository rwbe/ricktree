import { USER } from "@/config";
import Head from "next/head";

const MetaTags = () => (
  <Head>
    <title>{USER.name}</title>
    <meta name="description" content={USER.bio} />
    <link rel="icon" href="/favicon.png" type="image/png" />
  </Head>
);

export default MetaTags;
