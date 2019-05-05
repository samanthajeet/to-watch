import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const Nav = styled.div`
  /* border: 2px solid blue; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  h1 {
    font-family: 'Abril Fatface', cursive;
    font-size: 5rem;
    margin: 0;
    color: #E41D1A;
    font-weight: 400;
    letter-spacing: 0.15rem;
  }
  h5{
    font-family: 'Open Sans', sans-serif;  
    margin: 0;
  }
`;

const Buttons = styled.div`
  /* border: 2px solid pink; */
  width: 20%;
  height: 50%;
  display: flex;
  justify-content: space-between;
`;

function Navigation(props) {
  return (
    <Nav>
      <div>

      <h1>MoTeBo</h1>
      <h5>Movies | Television | Books</h5>
      </div>
      <Buttons>
        <Button variant="outlined" onClick={() => props.history.push("/")}>
          Your List
        </Button>
        <Button
          variant="outlined"
          onClick={() => props.history.push("/search")}
        >
          Search/Add
        </Button>
      </Buttons>
    </Nav>
  );
}

export default Navigation;
