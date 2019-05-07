import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import SearchCard from "../SearchCard/SearchCard";

const SearchArea = styled.div`
  /* border: 2px solid red; */
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SearchInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  input {
    width: 80%;
    height: 6rem;
    font-size: 5rem;
    font-family: "Open Sans", sans-serif;
    padding-left: 0.5rem;
    margin-bottom: 0.25rem;
    border: none;
    animation: growWidth 1.5s ease-in-out;
    background: #e41d1a;
    color: white;
  }

  @keyframes growWidth {
    0% {
      width: 5%;
    }
    100% {
      width: 80%;
    }
  }

  input:focus {
    outline: none;
  }

  h4 {
    font-family: "Open Sans", sans-serif;
  }
`;

const SearchResults = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 75%;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  justify-content: center;
`;

const SearchBtn = styled.div`
  width: 10%;
`;

class Search extends Component {
  state = {
    userInput: "",
    movieSearchResults: [],
    bookSearchResults: []
  };

  handleChange(prop, val) {
    this.setState({
      [prop]: val
    });
  }

  search(){
    this.getMovie();
  }

  getMovie() {
    const OMDBapi = process.env.REACT_APP_OMDBKEY;
    if (!this.state.userInput) {
      alert("enter title");
    } else {
      axios
        .get(
          `http://www.omdbapi.com/?apikey=${OMDBapi}&s=${this.state.userInput}`
        )
        .then(response => {
          this.setState({ movieSearchResults: response.data.Search });
        });
        this.getBook()
    }
  }

  getBook() {
    console.log('book searching')
    const GoogleBooksApi = process.env.REACT_APP_GOOGLEBOOKS;
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${
          this.state.userInput
        }&key=${GoogleBooksApi}`
      )
      .then(response => {
        this.setState({ bookSearchResults: response.data.items }) ;
        console.log(response.data.items)
      });
  }

  render() {
    // const { classes } = this.props;
    const { movieSearchResults } = this.state;
    const { bookSearchResults } = this.state
    const mappedSearchResults = movieSearchResults.map(result => {
      return (
        <div key={result.imdbID}>
          <SearchCard
            imdbID={result.imdbID}
            poster={result.Poster}
            title={result.Title}
            year={result.Year}
            history={this.props.history}
          />
        </div>
      );
    });

    const mappedBookResults = bookSearchResults.map( result => {
      return (
        <div key={result.id}>
        <SearchCard
          poster={result.volumeInfo.imageLinks.smallThumbnail}
          title={result.volumeInfo.title}
          year={result.volumeInfo.authors[0]}
        
        />
  
        </div>
      )
    })

    return (
      <SearchArea>
        <SearchInput>
          <h4>search movies and shows by title</h4>
          <form onSubmit={() => this.getMovie()}>
            <input
              type="text"
              autofocus="true"
              onChange={e => this.handleChange("userInput", e.target.value)}
            />
          </form>
          <SearchBtn>
            <Button variant="outlined" onClick={() => this.search()}>
              search
            </Button>
          </SearchBtn>
        </SearchInput>
        <SearchResults>
        {mappedSearchResults}
        {mappedBookResults}
        </SearchResults>
      </SearchArea>
    );
  }
}

export default withRouter(Search);
