import { NextPage } from "next";

type Props = {
  userAgent?: string;
};

const Switcher: NextPage<Props> = ({ userAgent }) => (
  <main>Your user agent: {userAgent}</main>
);

// as Switcher is a NextPage it knows what type req is
Switcher.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  return { userAgent };
};

export default Switcher;
