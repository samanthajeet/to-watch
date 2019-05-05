import React, {useEffect, useState, memo} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import axios from 'axios'
// import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Icon from '@material-ui/core/Icon';
// import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '20rem',
    height: '5rem',
    margin: '2rem'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    alignItems: 'center'
  },
  cover: {
    width: '50%',
  },
});

function ToWatchCards(props) {
  const { classes} = props;

  const [title, setTitle] = useState('');
  const [poster, setPoster] = useState('')

  useEffect(() => {
    getInfo();
  });


  const getInfo = async() =>{
    const OMDBapi = process.env.REACT_APP_OMDBKEY;
    let response = await axios.get(`http://www.omdbapi.com/?apikey=${OMDBapi}&i=${props.imdbid}`)
    setTitle(response.data.Title);
    setPoster(response.data.Poster)
  }

  function removeItem(){
    axios.delete(`/api/deleteItem/${props.id}`)
  }


  return (
    <Card className={classes.card}>
      <div className={classes.details}>
          <h4>
            {title}
          </h4>
          <p>
          {props.year}
          </p>

    
      </div>
      <CardMedia
        className={classes.cover}
        image={poster}
        title="Live from space album cover"
      />
        <button onClick={() => removeItem()}>delete</button>
    </Card>
  );
}

ToWatchCards.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default memo(withStyles(styles, { withTheme: true })(ToWatchCards));