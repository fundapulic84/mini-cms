/*
Example for including static props: 
WithStaticProps waits for getStaticProps to pass the props.
Incremental Static Generation (revalidate): NextJS waits 25 seconds to re-render page on server
*/

import { GetStaticProps } from "next";
import Link from "next/link";

import { ArticleType } from "../interfaces";
import { dummyArticleData } from "../utils/dummy-data";
import Layout from "../components/Layout";
import Stage from "../components/Stage";

type Props = {
  items: ArticleType[];
};

const WithStaticProps = ({ items }: Props) => (
  <Layout title="News Site Overview | Stage">
    <h1>Stage: News Site Overview</h1>
    <p>
      Incremental Static Generation with revalidate. When fetching data with{" "}
      <code>getStaticProps()</code>, NextJS pre-renders the page into HTML on
      the server ahead of each request, such as at build time. That means a good
      performance and revalidate takes care that the page will be re-rendered
      every x seconds.
    </p>
    <Stage items={items} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const items: ArticleType[] = dummyArticleData;
  return { props: { items }, revalidate: 25 };
};

export default WithStaticProps;
