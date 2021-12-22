import { GetStaticProps } from "next";
import Link from "next/link";

import { Article } from "../../interfaces";
import { dummyArticleData } from "../../utils/dummy-data";
import Layout from "../../components/Layout";
import List from "../../components/List";

type Props = {
  items: Article[];
};

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Articles List">
    <h1>Articles List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /articles</p>
    <List items={items} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: Article[] = dummyArticleData;
  return { props: { items } };
};

export default WithStaticProps;
