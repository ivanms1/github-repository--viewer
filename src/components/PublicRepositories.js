import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import RepositoryList from './RepositoryList';

const GET_CURRENT_USER = gql`
query listRepos($queryString: String!, $cursor: String){
 search(
 	query:$queryString
 	type:REPOSITORY
 	first:10
 	after: $cursor){  
  repositoryCount
  pageInfo{
   endCursor
   startCursor
   hasNextPage
  }
  edges{
   node{
    ... on Repository{
     id
     name
     description 
     url
     owner{
      login
      url
     }
     stargazers {
     	totalCount
     }
    }
   }
  }
 }
}
`;

const PublicRepositories = ({ queryString }) => (
	<Query
	 query={GET_CURRENT_USER}
	 variables={ { queryString }}
	 notifyOnNetworkStatusChange={true}>
		{({ data, loading, error, fetchMore }) => {

			if(error) {
				return <div><p>{error.toString()}</p></div>
			}

			if(loading && !data.search) {
				return  null;
			}

			return <RepositoryList
					repositories={data.search}
					fetchMore={fetchMore} />
		}}
	</Query>
);

export default PublicRepositories;