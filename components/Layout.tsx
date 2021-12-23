/*
  File-based routing gives the user an illusion of having multiple page requests. 
  Even the URL is being updated on changing the page.
  Actually, you have one SPA with multiple components, where you can also preserve the state.
  Nested (foldername = pathname) and dynamc ([]) routes are also possible.
  Also quite intuitive folder structure for developers.
*/

import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/about">
          <a>About</a>
        </Link>{" "}
        |{" "}
        <Link href="/articles">
          <a>Articles List</a>
        </Link>{" "}
        |{" "}
        <Link href="/api/articles">
          <a>Articles API</a>
        </Link>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>Footer</span>
    </footer>
  </div>
);

export default Layout;
