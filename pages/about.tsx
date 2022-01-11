import Link from "next/link";
import Layout from "../components/Layout";

const AboutPage = () => (
  <Layout title="About">
    <h1>About</h1>
    <h2>This is the about page</h2>
    <p>
      NextJS pre-renders every page by default: This page is an example for
      static generation without data fetch. It is generated on build time.
    </p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default AboutPage;
