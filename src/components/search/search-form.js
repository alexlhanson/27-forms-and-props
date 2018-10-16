'use strict';
import React from 'react';

export default class SearchForm extends React.Component{
  constructor(props){
    super (props);
    this.state = {};

    this.handleSearchText = this.handleSearchText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  };

  handleSubmit(e){
    e.preventDefault();

  };

  handleSearchText(e){
    let textValues = e.target.value;
    this.setState({textValues});
  };


  render (){
    return (
      <div className="redditSearch">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleSearchText} placeholder="Search Reddit"></input>
        </form>
      </div>
    )
  }
};