import React, { Fragment } from 'react';

import RepositoryItem from './RepositoryItem';

const updateQuery = (previousResult, { fetchMoreResult }) => {
	if(!fetchMoreResult) return previousResult;

	return {
		...previousResult,
		search: {
			...previousResult.search,
			...fetchMoreResult.search,
			edges: [
				...previousResult.search.edges,
				...fetchMoreResult.search.edges
			]
		}
	}
};

const RepositoryList = ({ repositories, fetchMore }) =>
	<Fragment>
		{
			repositories.edges.map(({ node }) => (
			<div key={node.id}>
				<RepositoryItem {...node} />
			</div>
		))
		}
		{
			repositories.pageInfo.hasNextPage && (
				<button
				 className="btn-large waves-effect waves-light light-blue"
				 type="button"
				 onClick={() =>
				 	fetchMore({
				 		variables: {
				 			cursor: repositories.pageInfo.endCursor
				 		},
				 		updateQuery
				 	})
				 }>
				See more
				</button>
			)
		}
	</Fragment>

export default RepositoryList