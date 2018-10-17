'use strict';
import React from 'react';

export default class SearchForm extends React.Component{
  constructor(props){
    super (props);
    this.state = {
      search: '',
      limit: '',
    };

    this.handleSearchText = this.handleSearchText.bind(this);
    this.handleLimit = this.handleLimit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  };

  handleSubmit(e){
    e.preventDefault();
    this.props.searchReddit(this.state.search, this.state.limit);
  };

  handleSearchText(e){
    this.setState({search: e.target.value});
  };

  handleLimit(e){
    this.setState({limit: (e.target.value - 1) || 100});
  }


  render (){
    return (
      <div className="redditSearch">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleSearchText} placeholder="Search Reddit"></input>
          <input onChange={this.handleLimit} placeholder="# Results" type="number" max="100" min="0"></input>
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
};