import { GetServerSideProps } from "next";
import Link from "next/link";
import Layout from "../components/Layout";
import { Party } from "../interfaces";
import { dummyElectionData } from "../utils/election-data";
import ElectionResults from "../components/ElectionResults";

type Props = {
  props: Party[];
};

const WithServerSideProps = ({ props }: Props) => (
  <Layout title="About">
    <h1>About</h1>
    <p>
      I use <code>getServerSideProps()</code> and I am rendered on request. I
      might not perform well, but I am always up-to-date. :)
    </p>
    <ElectionResults props={props} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const props: Party[] = dummyElectionData;
  return {
    props: { props },
  };
};

export default WithServerSideProps;
