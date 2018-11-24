import React, { Component } from 'react';

import './App.css';
import PublicRepositories from './components/PublicRepositories';

class App extends Component {
    state = {
      queryString: ""
    }

    handleChange = this.handleChange.bind(this);

    handleChange(e) {
      e.preventDefault()

      this.setState({ queryString: e.target.value });
    }

    render() {
        const { queryString } = this.state;
        return (
            <div className="App">
              <h1>Repository Search</h1>
              <div className="input-field">
                <input
                  onChange={this.handleChange}
                  value={queryString}
                  id="query"
                  className="validate"
                  type="text"/>
                <label htmlFor="query">Search repositories</label>
              </div>
              <PublicRepositories queryString={queryString}/>
            </div>
        );
    }
}

export default App;