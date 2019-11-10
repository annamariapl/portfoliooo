import React from "react";
import GitHubCommit from "./GitHubCommit";
import Section from "../section.jsx";

const GitHub = props => {
  return (
    <Section>
      {props.myCommits &&
        props.myCommits.map(item => {
          return (
            <GitHubCommit
              key={item.created_at}
              header={item.actor.login}
              image={item.actor.avatar_url}
              commitMessage={item.payload.commits[0].message}
              username={item.actor.display_login}
              date={item.created_at}
              url={"https://github.com/" + item.repo.name}
            />
          );
        })}
    </Section>
  );
};

export default GitHub;
