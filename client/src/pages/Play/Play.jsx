import React, { useContext } from "react";
import MusicContext from "../../store/music-context";
import classes from "./Play.module.css";
import PlayerControl from "../../components/PlayerControl/PlayerControl";
import Queue from "../../components/Queue/Queue";

const Play = () => {
  const musicCtx = useContext(MusicContext);
  // console.log(musicCtx.items[0])
  return (
    <div className={classes.play_container}>
      <PlayerControl song={musicCtx.items[0]} />
      <Queue/>
      {/* {musicCtx.items.map((song) => {
        return (
          <div className={classes.container} key={song.id}>
            <img src={song.img_src} alt="" />
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
            <ReactAudioPlayer src={song.src} controls className={classes.playerControl} onPlay={()=> console.log('hello')} />
          </div>
        );
      })} */}
    </div>
  );
};

export default Play;
