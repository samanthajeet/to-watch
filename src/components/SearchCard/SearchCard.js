import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import axios from "axios";
// import CardContent from '@material-ui/core/CardContent';
import CardMedia from "@material-ui/core/CardMedia";
// import Icon from '@material-ui/core/Icon';
// import Typography from '@material-ui/core/Typography';
import styled from "styled-components";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Fade from '@material-ui/core/Fade';


const styles = theme => ({
  card: {
    display: "flex",
    justifyContent: "space-between",
    width: "20rem",
    height: "15rem",
    margin: "2rem"
  },
  details: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "50%",
    alignItems: "center",
    padding: "1rem"
  },
  cover: {
    width: "50%"
  },
  fab: {
    position: 'relative',
    color: '#e41d1a'
    
  }
});

const CardText = styled.div`
  h4 {
    font-family: "Open Sans", sans-serif;
    margin: 0;
  }
  p {
    font-family: "Open Sans", sans-serif;
    margin: 0;
    font-size: 0.75rem;
    color: #e41d1a;
  }
`;

function SearchCards(props) {
  const { classes } = props;

  useEffect(() => {
    // console.log(333,props)
  });

  const addToList = async () => {
    await axios.post(`/api/addToList/${props.imdbID}`);
    props.history.push("/");
  };

  return (
    <Fade in={true}>
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardText>
          <p>{props.year}</p>
          <h4>{props.title} </h4>
        </CardText>
        <Fab color="inherit" aria-label="Add" size="small" className={classes.fab} onClick={() => addToList()}>
          <AddIcon />
        </Fab>
        {/* <button onClick={() => addToList()}>add to list</button> */}
      </div>
      <CardMedia
        className={classes.cover}
        image={props.poster}
        title="Live from space album cover"
      />
    </Card>
    </Fade>
  );
}

SearchCards.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(SearchCards);
