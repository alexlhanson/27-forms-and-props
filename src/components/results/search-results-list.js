'use strict';

import React from 'react';

export default class SearchResultsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <section id="searchList">
        <h1>Subreddit Search Results
        </h1>
        <ul>
          {
            this.props.SearchResultsList.map((result, i) => {
              return (<li key={i}>
                <h2>{result.data.title}</h2>
                <a href={`${result.data.permalink}`}>{result.data.permalink}</a>
                <p>{result.data.ups}</p>
                </li>);
            })
          }
        </ul>
      </section>
    )
  }
};