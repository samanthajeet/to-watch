import React, { Component } from "react";
import axios from "axios";
import {withRouter} from 'react-router';
import SearchCard from "../SearchCard/SearchCard";

class Search extends Component {
  state = {
    userInput: "",
    searchResults: []
  };

  handleChange(prop, val) {
    this.setState({
      [prop]: val
    });
  }

  getMovie() {
    const OMDBapi = process.env.REACT_APP_OMDBKEY;
    axios
      .get(
        `http://www.omdbapi.com/?apikey=${OMDBapi}&s=${this.state.userInput}`
      )
      .then(response => {
        this.setState({ searchResults: response.data.Search });
      });
  }

  render() {
    const { searchResults } = this.state;
    const mappedSearchResults = searchResults.map(result => {
      return (
        <div key={result.imdbID}>
          <SearchCard imdbID={result.imdbID} poster={result.Poster} title={result.Title} year={result.Year} history={this.props.history} />
        </div>
      );
    });

    return (
      <div>
        <button onClick={() => this.props.history.push('/')} >Go To List</button>
        <h1>search area</h1>
        <input
          placeholder="tv or movie name"
          onChange={e => this.handleChange("userInput", e.target.value)}
        />
        <button onClick={() => this.getMovie()}>search</button>
        {mappedSearchResults}
      </div>
    );
  }
}

export default withRouter(Search);
