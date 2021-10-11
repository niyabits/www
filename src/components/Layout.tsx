import React from "react";
import Nav from "@/components/Nav";
import globalStyles from "../../styles/global.styles";
import { styled } from "@/stitches";

const Container = styled("div", {
  padding: "0 $sp5",
  main: {
    maxWidth: "$lg",
    margin: "auto",
  },

  background: "url('/bg.jpg') no-repeat",
  backgroundSize: "cover",
  overflowX: "hidden",
});

const Layout: React.FC<{}> = ({ children }) => {
  globalStyles();
  return (
    <Container>
      <Nav />
      <main>{children}</main>
    </Container>
  );
};

export default Layout;
