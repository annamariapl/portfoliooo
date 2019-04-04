import React from "react";

import GitHub from "./GitHub/GitHub";


const Containergit = props => (
  <div className="container">
  <h3 className="section-title" id="github"> Git Commits &#11206; </h3>
  
  <GitHub myCommits={props.myCommits} />

  </div>
  );

export default Containergit;
