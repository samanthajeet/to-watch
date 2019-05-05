import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import ToWatchCard from "../ToWatchCard/ToWatchCard";

const ToWatchContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-around;

  h1 {
    font-family: "Josefin Slab", serif;
  }
  h2 {
    font-family: "Josefin Slab", serif;
  }
`;

const ToWatchListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2{
    font-family: 'Open Sans', sans-serif;  
    font-size: 2.5rem;
    margin: 0.75rem;
    font-weight: 400
  }
`;

const ToWatchCards = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  overflow-y: auto;
  overflow-x: hidden;
`;

function ToWatchList(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    let response = await axios.get(`/api/getList`);
    await setData(response.data);
  };

  let mappedList = data.map(item => (
    <div key={item.id}>
      <ToWatchCard imdbid={item.imdbid} id={item.id} />
    </div>
  ));

  return (
    <ToWatchContainer>
      <ToWatchListContainer>
        <h2>Things You Need to Watch</h2>
        <ToWatchCards>{mappedList}</ToWatchCards>
      </ToWatchListContainer>
    </ToWatchContainer>
  );
}

export default ToWatchList;
