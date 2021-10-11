import React from "react";
import Nav from "@/components/Nav";
import globalStyles from "../../styles/global.styles";
import { styled } from "@/stitches";

const Container = styled("div", {
  maxWidth: "$lg",
  margin: "auto",
  padding: "0 $sp5",
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
