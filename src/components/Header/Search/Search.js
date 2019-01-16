import React, { Component } from 'react';

import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchInput: props.searchInput
    }
    this.onChange = this.onChange.bind( this );
    this.onClick = this.onClick.bind( this );


  }

  onChange(value){
    this.setState({searchInput: value})
    console.log(this.state.searchInput)
  }
  onClick(){
    this.props.filterPostsFn(this.state.searchInput)
  }
  render() {
    return (
      <section className="Search__parent">

        <div className="Search__content">
          <input 
            placeholder="Search Your Feed" 
            onChange={(e) => this.onChange(e.target.value)}
            
          />

          <SearchIcon 
            id="Search__icon" 
            onClick={this.onClick}
          />
        </div>
        
      </section>
    )
  }
}