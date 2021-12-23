/*
Example for including static props: 
WithStaticProps waits for getStaticProps to pass the props.
Incremental Static Generation (revalidate): NextJS waits 25 seconds to rerender page on server
*/

import { GetStaticProps } from "next";
import Link from "next/link";

import { Article } from "../interfaces";
import { dummyArticleData } from "../utils/dummy-data";
import Layout from "../components/Layout";
import Stage from "../components/Stage";

type Props = {
  items: Article[];
};

const WithStaticProps = ({ items }: Props) => (
  <Layout title="News Site Overview | Stage">
    <h1>Stage: News Site Overview</h1>
    <p>
      Fetching data with <code>getStaticProps()</code>.
    </p>
    <Stage items={items} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const items: Article[] = dummyArticleData;
  return { props: { items }, revalidate: 25 };
};

export default WithStaticProps;
