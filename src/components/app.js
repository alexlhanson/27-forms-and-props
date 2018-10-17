'use strict';

import React from 'react';
import superagent from 'superagent';
import SearchForm from '../components/search/search-form';
import SearchResultsList from '../components/results/search-results-list';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      results: [],
      error: false
    };

    this.fetchData = this.fetchData.bind(this);
    this.searchReddit = this.searchReddit.bind(this);
  }

  searchReddit(search, limit) {

    const redditURL = `https://www.reddit.com/r/${search}.json?limit=${limit}`;

    return this.fetchData(redditURL)
      .then(results => this.setState({
        results: results.data.children,
        error: false,
      }))
      .catch( err => {
        this.setState({
          results: [],
          error: true,
        })
      });
  }

  fetchData(url) {
    return superagent.get(url)
      .then(res => res.body)
      .catch(console.error);
  }

  render() {
    return (
      <main>
        <SearchForm searchReddit={this.searchReddit}/>
        <SearchResultsList SearchResultsList={this.state.results}/>
      </main>
    )
  }

};