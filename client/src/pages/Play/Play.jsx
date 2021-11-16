import React, { useContext, useState } from "react";
import MusicContext from "../../store/music-context";
import classes from "./Play.module.css";
import PlayerControl from "../../components/PlayerControl/PlayerControl";
import Queue from "../../components/Queue/Queue";

const Play = () => {
  const [current, setCurrent] = useState(0);
  const musicCtx = useContext(MusicContext);
  // console.log(musicCtx.items[0])
  const nextSongHandler = () => {
    setCurrent((prev) => {
      if(prev === musicCtx.items.length-1){
          return 0
      }else{
        return prev + 1
      }
    })
  };
  const prevSongHandler = () =>{
    setCurrent((prev) =>{
      if(prev === 0){
        return musicCtx.items.length -1
      }else{
        return prev -1
      }
    })
  }
  return (
    <div className={classes.play_container}>
      <PlayerControl song={musicCtx.items[current]} nextClick={nextSongHandler} prevClick={prevSongHandler} />
      <Queue link_to={"/category"} />

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
