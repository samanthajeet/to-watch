import React, {useEffect, useState } from 'react';
import axios from 'axios';
import ToWatchCard from '../ToWatchCard/ToWatchCard'

function ToWatchList(props) {
    const [data, setData] = useState([])

    useEffect(() => {
        getList();
    }, []);
    
    const getList = async () => {
        let response = await axios.get(`/api/getList`);
        console.log(response.data)
        await setData(response.data)
    } 

    let mappedList = data.map( item => (
            <div key={item.id}>
            <ToWatchCard
                imdbid={item.imdbid}
            />
            </div>

        ))
     


    return (
        <div>
            <button onClick={() => props.history.push('/search')} >Search Titles</button>
            <h2>Titles To Watch</h2>
            {mappedList}
        </div>
    )
    
}

export default ToWatchList;