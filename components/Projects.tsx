import GithubIcon from "../assets/icons/Github";
import ReactDirImg from "../assets/ReactDir";
import { styled } from "../stitches.config";

const TopProjCont = styled("div", {
  display: "flex",

  "& > div": {
    margin: "0 30px",
  },

  "& > div > div": {
    display: "flex",
    justifyContent: "space-between",
  },
});

const ProjCont = styled("div", {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});

const TopProj = () => {
  return (
    <TopProjCont>
      <ReactDirImg width="200px" />
      <div>
        <div>
          <h3>React Directory</h3>
          <GithubIcon />
        </div>
        <p>
          A React library with a human API to create a directory structure in
          React.
        </p>
      </div>
    </TopProjCont>
  );
};

const Projects = () => {
  return (
    <ProjCont>
      <h2>Projects</h2>
      <div>
        <br />
        <br />
        <TopProj />
      </div>
    </ProjCont>
  );
};

export default Projects;
