import React, { ReactNode } from "react";
import Head from "next/head";
//import Nav from "./Nav";
import { styled } from "../stitches.config";

type Props = {
  children?: ReactNode;
  title?: string;
};

const LayoutCont = styled("div", {
  background: "url('/bg.jpg') no-repeat ",
  backgroundSize: "cover",
});

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <LayoutCont>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>{/* <Nav /> */}</header>
    {children}
  </LayoutCont>
);

export default Layout;
