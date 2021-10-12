import { styled } from "@/stitches";

const Container = styled("nav", {
  padding: "$sp5 0",
  height: "$sz8",
  position: "fixed",
  width: "100%",

  ul: {
    display: "flex",
    maxWidth: "$lg",
    margin: "auto",

    li: {
      marginRight: "$sp6",
      listStyleType: "none",

      a: {
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        color: "$gray200",

        "&:after": {
          content: "",
          position: "absolute",
          width: "100%",
          transform: "scaleX(0)",
          height: 1,
          top: "110%",
          left: 0,
          background:
            "linear-gradient(270deg, #34FFFF 0%, #34FFCE 0.01%, #299EFF 102.92%)",
          transformOrigin: "bottom right",
          transition: "transform .4s cubic-bezier(.86,0,.07,1)",
        },

        "&:hover::after": {
          transform: "scaleX(1)",
          transformOrigin: "bottom left",
        },
      },
    },
  },
});

const Nav = () => (
  <Container>
    <ul>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Projects</a>
      </li>
      <li>
        <a>Connect</a>
      </li>
    </ul>
  </Container>
);

export default Nav;
