import { GetStaticProps, GetStaticPaths } from "next";

import { ArticleType } from "../../interfaces";
import { dummyArticleData } from "../../utils/dummy-data";
import Layout from "../../components/Layout";
import Article from "../../components/Article";

type Props = {
  item?: ArticleType;
  errors?: string;
};

const StaticPropsArticle = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error">
        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout title={`${item ? item.title : "News Page"} | Article`}>
      {item && <Article item={item} />}
    </Layout>
  );
};

export default StaticPropsArticle;

export const getStaticPaths: GetStaticPaths = async () => {
  /*
    Get the paths we want to pre-render based on articles
   */
  const paths = dummyArticleData.map((article) => ({
    params: { id: article.id.toString() },
  }));

  /* 
    We'll pre-render only these paths at build time.
    { fallback: false } means other routes should 404.
  */
  return { paths, fallback: false };
};

/*
    This function gets called at build time on server-side.
    It won't be called on client-side, so you can even do
    direct database queries.
 */
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const item = dummyArticleData.find((data) => data.id === Number(id));
    /*
      By returning { props: item }, the StaticPropsArticle component
      will receive `item` as a prop at build time
    */
    return { props: { item } };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};
