import { copyToClipboard } from "copy-lite";
import CopyIcon from "../assets/icons/copy";
import { styled } from "../stitches.config";

const Cont = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "60vh",
  marginTop: "20vh",

  ".copyEmail": {
    display: "flex",
    alignItems: "flex-start",
    padding: "9px 0",
    borderRadius: 9,
    backgroundColor: "hsl(211, 31%, 17%)",

    span: {
      margin: "0 24px",
    },

    "& :last-child": {
      cursor: "pointer",
    },
  },
  ".cyan": {
    background: "linear-gradient(180deg, #7DFFB1 0%, #00B2FF 150%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
});

const copyEmail = () => {
  copyToClipboard("yashguptaofficial@gmail.com");
};

const Connect = () => {
  return (
    <Cont id="connect">
      <h2>Connect</h2>
      <p>Email me</p>
      <div className="copyEmail">
        <span>yashguptaofficial@gmail.com</span>
        <span data-tooltip="Click to Copy">
          <CopyIcon onClick={copyEmail} />
        </span>
      </div>
      <p>
        Or you can DM me on <span className="cyan">Twitter</span>
      </p>
    </Cont>
  );
};

export default Connect;
