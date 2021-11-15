import React, { useContext, useState } from "react";
import MusicContext from "../../store/music-context";
import classes from "./Queue.module.css";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import SongList from "../SongList/SongList";

const Queue = () => {
  const musicCtx = useContext(MusicContext);
  console.log(musicCtx.items);
  const NoList = () => {
    return (
      <div className={classes.wrapper}>
        <h3>Music list is empty</h3>
      </div>
    );
  };
  const List = () => {
    return (
      <>
        <div className={classes.wrapper}>
          {musicCtx.items.map((song) => {
            return <SongList key={song.id} song={song} />;
          })}
        </div>
      </>
    );
  };
  return (
    <div className={classes.container}>
      <div className={classes.music_list}>
        <h3>Music List</h3>
      </div>
      {musicCtx.items.length === 0 ? <NoList /> : <List />}
      <Link to={musicCtx.items.length === 0? '#':'/play'} className={classes.btn_wrapper}>
        <IconButton size="medium">
          <PlayCircleIcon className={classes.btn_play} sx={{ fontSize: 40 }} />
        </IconButton>
      </Link>
    </div>
  );
};

export default Queue;