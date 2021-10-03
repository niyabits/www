import ExtLink from "../assets/icons/ExtLink";
import GithubIcon from "../assets/icons/Github";
import ReactDirImg from "../assets/ReactDir";
import { styled } from "../stitches.config";

const TopProjCont = styled("div", {
  display: "flex",
  border: "1px solid #394655",
  borderRadius: "12px",
  width: "70%",
  margin: "0 30px",
  padding: 36,

  "@media (max-width: 1750px)": {
    padding: "36px",
    border: "1px solid #394655",
    borderRadius: "12px",
    maxWidth: "750px",

    width: "70%",
    margin: "auto",
  },

  "@media (max-width: 500px)": {
    "#topProjImg": {
      display: "none",
    },
  },

  "& > div": {
    margin: "0 30px",
  },

  a: {
    display: "flex",
    justifyContent: "space-between",
  },
});

const TopProj = () => {
  return (
    <TopProjCont>
      <ReactDirImg width="200px" id="topProjImg" />
      <div>
        <div>
          <a
            href="https://github.com/yashguptaz/react-directory"
            target="_blank"
          >
            <h3>React Directory</h3>
            <GithubIcon />
          </a>
        </div>
        <p>
          A React library with a human API to create a directory structure in
          React.
        </p>
      </div>
    </TopProjCont>
  );
};

const OtherProjCont = styled("div", {
  width: "252px",
  padding: "36px",
  margin: "12px 12px",
  border: "1px solid #394655",
  borderRadius: "12px",
  maxWidth: "750px",

  "@media (max-width: 1750px)": {
    width: "70%",
    margin: "12px 30px",
  },

  a: {
    display: "flex",
    justifyContent: "space-between",
  },
});

type OtherProjProps = {
  title: string;
  desc: string;
  to: string;
  linkType?: "github" | "live";
};

const OtherProj = ({
  title,
  desc,
  linkType = "github",
  to,
}: OtherProjProps) => {
  return (
    <OtherProjCont>
      <div>
        <a href={to} target="_blank">
          <h3>{title}</h3>
          {linkType === "github" ? <GithubIcon /> : <ExtLink />}
        </a>
      </div>
      <p>{desc}</p>
    </OtherProjCont>
  );
};

const ProjCont = styled("div", {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  marginBottom: "15vh",
  marginTop: "15vh",

  a: {
    color: "white",
  },

  "& > div": {
    display: "flex",
    justifyContent: "center",
  },

  h3: {
    color: "#7DFFB1",
  },

  ".oth-proj-cont": {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    flexWrap: "wrap",

    width: "60%",
    marginTop: "12px",

    "@media (max-width: 1750px)": {
      flexDirection: "column",
      width: "auto",
    },
  },
});

const Projects = () => {
  return (
    <ProjCont id="projects">
      <h2>Projects</h2>
      <br />
      <br />
      <div>
        <TopProj />
      </div>
      <div className="oth-proj-cont">
        <OtherProj
          title="Calvera Dark"
          desc="A Neovim Theme made in the Lua Programming Language, it pritorizes loading important colors first through Neovim APIs it has support for various plugins"
          to="https://github.com/yashguptaz/calvera-dark.nvim"
        />
        <OtherProj
          title="Tell About"
          desc="A CLI Tool to get information about 
NPM packages."
          to="https://github.com/yashguptaz/tell-about"
        />
        <OtherProj
          title="Dowik"
          desc="A tasks app made with Next.js, TypeScript Stitches, Radix-UI, firebase, and other technologies. "
          linkType="live"
          to="https://ontwik-todo-yash.vercel.app/"
        />
      </div>
    </ProjCont>
  );
};

export default Projects;
