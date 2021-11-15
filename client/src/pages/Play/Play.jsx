import React, { useContext } from "react";
import MusicContext from "../../store/music-context";
import classes from "./Play.module.css";
import ReactAudioPlayer from "react-audio-player";

const Play = () => {
  const musicCtx = useContext(MusicContext);
  return (
    <div>
      {musicCtx.items.map((song) => {
        return (
          <div className={classes.container} key={song.id}>
            <img src={song.img_src} alt="" />
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
            <ReactAudioPlayer src={song.src} controls className={classes.playerControl} onPlay={()=> console.log('hello')} />
          </div>
        );
      })}
    </div>
  );
};

export default Play;
