import Link from "next/link";
import Laptop from "../assets/laptop";
import Connect from "../components/Connect";
import Layout from "../components/Layout";
import Technology from "../components/Technology";
import { styled } from "../stitches.config";

const Home = styled("div", {
  display: "flex",
  height: "85vh",
  fontFamily: "Poppins",
  justifyContent: "space-evenly",
  alignItems: "center",

  h1: {
    fontSize: "clamp(3rem, 10.7vw - 1.7rem, 5rem)",
    padding: 0,
  },

  h3: {
    background: "linear-gradient(270.01deg, #299EFF -1.93%, #7DFFB1 100.64%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },

  ".cta": {
    fontSize: "16px",
    fontFamily: "PT Sans",
    padding: "9px 30px",
    marginTop: "24px",
    border: "none",
    borderRadius: 6,
    background:
      "linear-gradient(270deg, #34FFFF 0%, #34FFCE 0.01%, #299EFF 102.92%)",
  },
});

const IndexPage = () => (
  <Layout title="Yash Gupta - Personal Website">
    <Home>
      <div>
        <h1>Yash Gupta</h1>
        <h3>Fullstack TypeScript Developer</h3>
        <Link href="#connect">
          <button className="cta">Connect</button>
        </Link>
      </div>
      <Laptop width="25vw" />
    </Home>
    <Technology />
    <Connect />
  </Layout>
);

export default IndexPage;
