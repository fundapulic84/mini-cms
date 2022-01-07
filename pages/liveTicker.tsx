import { GetServerSideProps } from "next";
import Link from "next/link";
import Layout from "../components/Layout";
import { PartyType } from "../interfaces";
import { dummyElectionData } from "../utils/election-data";
import ElectionResults from "../components/ElectionResults";

type Props = {
  props: PartyType[];
};

const WithServerSideProps = ({ props }: Props) => (
  <Layout title="Election LiveTicker">
    <h1>Election LiveTicker</h1>
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
  const props: PartyType[] = dummyElectionData;
  return {
    props: { props },
  };
};

export default WithServerSideProps;
