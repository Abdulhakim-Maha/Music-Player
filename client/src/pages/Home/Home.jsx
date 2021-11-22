import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import Credential from "../../UI/Credential";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";

const Home = () => {
  const [creIsShow, setCreIsShow] = useState(false);
  const showCreHandler = () => {
    setCreIsShow(true);
  };
  const hideCreHandler = () => {
    setCreIsShow(false);
  };
  return (
    <div className={classes.main}>
      {creIsShow && <Credential onClose={hideCreHandler} />}
      <div className={classes.home}>
        <div className={classes.credential}>
          <IconButton>
            <AccountCircleIcon
              sx={{ fontSize: 50, color: "white" }}
              onClick={showCreHandler}
            />
          </IconButton>
        </div>
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
