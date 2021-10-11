import { styled } from "@/stitches";
import React from "react";

const Container = styled("button", {
  padding: "$sp2 $sp5",
  borderRadius: "$r2",
  cursor: "pointer",

  background:
    "linear-gradient(270deg, #34FFFF 0%, #34FFCE 0.01%, #299EFF 102.92%)",
});

const Button: React.FC<{}> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Button;
