import { styled } from "@/stitches";

const Container = styled("nav", {
  padding: "$sp5 0",
  height: "$sz8",

  ul: {
    display: "flex",
    maxWidth: "$lg",
    margin: "auto",

    li: {
      marginRight: "$sp6",
      listStyleType: "none",
    },
  },
});

const Nav = () => (
  <Container>
    <ul>
      <li>Home</li>
      <li>Projects</li>
      <li>Connect</li>
    </ul>
  </Container>
);

export default Nav;
