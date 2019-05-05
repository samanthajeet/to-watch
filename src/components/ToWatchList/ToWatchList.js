import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Button from '@material-ui/core/Button';




import ToWatchCard from "../ToWatchCard/ToWatchCard";

const ToWatchContainer = styled.div`
  border: 2px solid red;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-around;

  h1{
    font-family: 'Josefin Slab', serif;
  }
  h2{
    font-family: 'Josefin Slab', serif;
  }
`;



const ToWatchListContainer = styled.div`
    width: 50%;
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
      <div>
          <h1>
              You have 20 titles to watch
          </h1>
        <Button variant="outlined" onClick={() => props.history.push("/search")}>
        Add to list
      </Button>
      </div>
      <ToWatchListContainer>
        <h2>Your Titles</h2>
        {mappedList}
      </ToWatchListContainer>
    </ToWatchContainer>
  );
}

export default ToWatchList;
