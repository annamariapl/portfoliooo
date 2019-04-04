import React from "react";
import GitHubCommit from "./GitHubCommit";
import Section from "../section";
import {
	FaGithub
} from "react-icons/fa";

const GitHub = props => {
	return (
		<Section>
		<div>
		<a target="_blank" className="link-contact links" href="https://github.com/annamariapl" >
		<p> {<FaGithub className="bigger-font-standard" />} How do I refactor my Portfolio ;-)</p> </a>

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
				url="https://github.com/annamariapl/portfoliooo" /*{item.repo.url}*/
				/>
				);
		})}
		</Section>
		);
};

export default GitHub;
