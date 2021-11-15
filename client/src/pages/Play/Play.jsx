import React, { useContext } from "react";
import MusicContext from "../../store/music-context";
import classes from './Play.module.css'

const Play = () => {
  const musicCtx = useContext(MusicContext);
  return (
    <div>
      {musicCtx.items.map((song) => {
        return (
          <div className={classes.container}>
          <img src={song.img_src} alt="" />
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Play;
