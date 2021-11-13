import React, { useContext } from "react";
import MusicContext from "../../store/music-context";

const Play = () => {
  const musicCtx = useContext(MusicContext);
  return (
    <div>
      {musicCtx.items.map((song) => {
        return (
          <div className="con">
            <h5>{song.img_src}</h5>
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Play;
