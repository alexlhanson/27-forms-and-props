'use strict';
import React from 'react';
import superagent from 'superagent';
import SearchForm from '../components/search/search-form';
import SearchResultsList from '../components/results/search-results-list';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main>
        <SearchForm/>
        <SearchResultsList/>
      </main>
    )
  }

};