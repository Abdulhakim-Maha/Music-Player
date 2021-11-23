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
            <h1>JOOXIFY</h1>
            <h4>Let go everything</h4>
            <h4>and join our world</h4>
            <h3 className={classes.link}>Copyright &copy; 2021, Data structure, KMITL</h3>
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
