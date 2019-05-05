import React, { useEffect, useState, memo } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import axios from "axios";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
// import CardContent from '@material-ui/core/CardContent';
import CardMedia from "@material-ui/core/CardMedia";
// import Icon from '@material-ui/core/Icon';
// import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    display: "flex",
    justifyContent: "space-between",
    // alignItems: 'flex-start',
    width: "20rem",
    height: "8rem",
    margin: "1rem"
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    alignItems: "center",
    justifyContent: 'center',
    padding: '0.5rem'
  },
  cover: {
    width: "50%"
  }
});

function ToWatchCards(props) {
  const { classes } = props;

  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [anchorEl, setanchorEl] = useState(null);

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    const OMDBapi = process.env.REACT_APP_OMDBKEY;
    let response = await axios.get(
      `http://www.omdbapi.com/?apikey=${OMDBapi}&i=${props.imdbid}`
    );
    setTitle(response.data.Title);
    setPoster(response.data.Poster);
  };

  function removeItem() {
    axios.delete(`/api/deleteItem/${props.id}`);
    handleClose()
    window.location.reload();
  }

  const handleClose = () => {
    setanchorEl(null);
  };

  return (
    <Card className={classes.card}>
      <IconButton
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={(e) => setanchorEl(e.currentTarget)}
      >
        <MoreVertIcon />
      </IconButton>
      <div className={classes.details}>
        <h4>{title}</h4>
        <p>{props.year}</p>
      </div>
      <CardMedia
        className={classes.cover}
        image={poster}
        title="Live from space album cover"
      />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleClose()}
      >
        <MenuItem onClick={() => handleClose()}>mark watched</MenuItem>
        <MenuItem onClick={() => handleClose()}>more info</MenuItem>
        <MenuItem onClick={() => removeItem()}>delete</MenuItem>
      </Menu>
    </Card>
  );
}

ToWatchCards.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default memo(withStyles(styles, { withTheme: true })(ToWatchCards));
