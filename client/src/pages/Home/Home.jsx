import React from "react";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
const Home = () => {
  return (
    <div className={classes.main}>
      <div className={classes.home}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h1>Spotify</h1>
            <h4>Make your life</h4>
            <h4>More happier</h4>
            <Link to="/category" className={classes.link}>
              Let's go
            </Link>
          </div>
          <div className={classes.image}>
            <Link to="/category">
              <MusicNoteOutlinedIcon
                sx={{ fontSize: 300 }}
                className={classes.icon}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
