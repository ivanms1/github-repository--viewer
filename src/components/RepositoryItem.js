import React from 'react';

const RepositoryItem = ({
	name,
	url,
	description,
	owner,
	stargazers
}) => (
	<div>
		<div className="RepositoryItem-title">
			<h2>
				<a href={url}
				   target="_blank"
				   without rel="noopener noreferrer">{name}</a>
			</h2>
			<div className="RepositoryItem-title-action">
				{stargazers.totalCount} Stars
			</div>
			<div>
				<p>{description}</p>
			</div>
			<div>
				<a href={owner.url}
				   target="_blank"
				   without rel="noopener noreferrer">{owner.login}</a>
			</div>
		</div>
	</div>
)

export default RepositoryItem