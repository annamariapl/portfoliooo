import React from "react";
import styled from "styled-components";

const imageSize = "20px";

const Container = styled.div`
  display: grid;
  grid-template-columns: ${imageSize} 150px auto;
  grid-gap: 5px;
  margin-bottom: 3px;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  img {
    width: ${imageSize};
    height: ${imageSize};
    border-radius: 50%;
  }
`;

const GitHubCommit = props => {
  return (
    <Container>
      <img src={props.image} alt={props.username + " avatar"} />
      <strong>
        <a
          className="links"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/annamariapl"
        >
          <p> {props.header} </p>
        </a>
      </strong>
      <div className="links">
        <a href={props.url}> {props.commitMessage} </a>
        <div className="time-stamp"> {props.date} </div>
      </div>
    </Container>
  );
};

export default GitHubCommit;
