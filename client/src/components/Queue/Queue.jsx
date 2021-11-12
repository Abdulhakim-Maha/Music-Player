import React from "react";
import classes from "./Queue.module.css";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import SongList from "../SongList/SongList";
const list = [
  {
    title: "What do you mean",
    artist: "Justin Bieber",
    img_src: "/images/what_do_you_mean.png",
  },
  {
    title: "comethru",
    artist: "Jeremy Zucker",
    img_src: "/images/comethru.jpg",
  },
  {
    title: "Sorry",
    artist: "Justin Bieber",
    img_src: "/images/sorry.jpg",
  },
  {
    title: "Lovely",
    artist: "Billie Eillish",
    img_src: "/images/lovely.jpg",
  },
  {
    title: "What do you mean",
    artist: "Justin Bieber",
    img_src: "/images/what_do_you_mean.png",
  },
  {
    title: "บังอร",
    artist: "Sprite",
    img_src: "/images/บังอร.jpg",
  },
  {
    title: "Psycho",
    artist: "Red Velvet",
    img_src: "/images/psycho.jpg",
  },
  {
    title: "What is love",
    artist: "Twice",
    img_src: "/images/what_is_love.jpg",
  },
  {
    title: "Boombayah",
    artist: "Black Pink",
    img_src: "/images/boombayah.jpg",
  },
];

const Queue = () => {
  return (
    <div className={classes.container}>
      <div className={classes.music_list}>
        <h3>Music List</h3>
      </div>
      <div className={classes.wrapper}>
        {list.map((song) => {
          return <SongList song={song}/>
        })}
      </div>
      <Link to="/play" className={classes.btn_wrapper}>
        <IconButton size="medium">
          <PlayCircleIcon className={classes.btn_play} sx={{ fontSize: 40 }} />
        </IconButton>
      </Link>
    </div>
  );
};

export default Queue;
