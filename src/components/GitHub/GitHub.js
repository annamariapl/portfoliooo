import React from "react";
import GitHubCommit from "./GitHubCommit";
import Section from "../section";

const GitHub = props => {
	return (
		<Section>
		<div>
		<p> How do I refactor my Portfolio ;-) </p>
	<hr/>
	</div>
	{props.myCommits &&
		props.myCommits.map(item => {
			console.log(item);
			return (
				<GitHubCommit
				header={item.actor.login}
				image={item.actor.avatar_url}
				commitMessage={item.payload.commits[0].message}
				username={item.actor.display_login}
				date={item.created_at}
				/>
				);
		})}
		</Section>
		);
};

export default GitHub;
