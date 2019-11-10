import React from "react";
import GitHubSingleCommit from "./GitHubSingleCommit";
import Section from "./GitSection.jsx";

const GitHub = ({ myCommits }) => {
  return (
    <Section>
      {myCommits && myCommits
        ? myCommits.map(item => {
            return (
              <GitHubSingleCommit
                key={item.created_at}
                header={item.actor.login}
                image={item.actor.avatar_url}
                commitMessage={item.payload.commits[0].message}
                username={item.actor.display_login}
                date={`at ${item.created_at.slice(0, 10)}`}
                reponame={
                  item.repo.name.startsWith("annamariapl/")
                    ? `in "${item.repo.name.slice(12)}" repository`
                    : item.repo.name
                }
                url={"https://github.com/" + item.repo.name}
              />
            );
          })
        : "no recent commits"}
    </Section>
  );
};

export default GitHub;
