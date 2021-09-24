import Link from "next/link";
import { styled } from "../stitches.config";

const NavCont = styled("nav", {
  display: "flex",
  width: "100%",
  justifyContent: "flex-end",
  paddingTop: "18px",

  a: {
    color: "white",
    textDecoration: "none",
    margin: "0px 18px",
  },
});

const Nav = () => {
  return (
    <NavCont>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        <a href="#projects">Projects</a>
        <a href="#connect">Connect</a>
      </div>
    </NavCont>
  );
};

export default Nav;
