import Button from "@/components/Button";
import Layout from "@/components/Layout";
import { styled } from "@/stitches";
import Laptop from "../../assets/laptop";

const Home = styled("section", {
  // 82% viewport height - Navbar Height
  height: "calc(82vh - $sz8)",

  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",

  h1: {
    fontSize: "4.3rem",
    fontWeight: "400",
    position: "relative",
    right: "$sp2",
  },

  h2: { fontWeight: "100" },

  button: {
    marginTop: "$sp4",
  },
});

const Index = () => {
  return (
    <Layout>
      <Home id="home">
        <div>
          <h1> Yash Gupta</h1>
          <h2> Frontend Developer</h2>
          <Button>Connect</Button>
        </div>
        <Laptop width="30rem" />
      </Home>
    </Layout>
  );
};

export default Index;
