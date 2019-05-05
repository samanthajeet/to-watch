import React, {useEffect} from 'react';
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
    width: '15rem',
    height: '15rem',
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

function SearchCards(props) {
  const { classes } = props;

  useEffect(() => {
    // console.log(333,props)
  });

  const addToList = async() => {
    await axios.post(`/api/addToList/${props.imdbID}`)
    props.history.push('/')
  }

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
          <h4>
            {props.title}
          </h4>
          <p>
          {props.year}
          </p>

        <button onClick={() => addToList()} >add to list</button>
    
      </div>
      <CardMedia
        className={classes.cover}
        image={props.poster}
        title="Live from space album cover"
      />
    </Card>
  );
}

SearchCards.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SearchCards);