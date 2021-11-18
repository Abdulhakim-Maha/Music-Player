import React, { useContext, useState, useEffect } from "react";
import MusicContext from "../../store/music-context";
import classes from "./Play.module.css";
import PlayerControl from "../../components/PlayerControl/PlayerControl";
import Queue from "../../components/Queue/Queue";
import axios from "axios";
import { Redirect } from "react-router";

const Play = () => {
  const [current, setCurrent] = useState(0);
  const musicCtx = useContext(MusicContext);
  useEffect(() => {
    const postMusic = async () => {
      try {
        const res = await axios.get("/getMusic/dequeue");
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    postMusic();
  }, [musicCtx.items]);

  const nextSongHandler = () => {
    axios
      .get("getMusic/next")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setCurrent((prev) => {
      if (prev === musicCtx.items.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };
  const prevSongHandler = () => {
    setCurrent((prev) => {
      if (prev === 0) {
        return musicCtx.items.length - 1;
      } else {
        return prev - 1;
      }
    });
  };
  return (
    <div className={classes.play_container}>
      {musicCtx.items.length === 0 ? (
        <Redirect to="/category" />
      ) : (
        <PlayerControl
          song={musicCtx.items[current]}
          nextClick={nextSongHandler}
          prevClick={prevSongHandler}
        />
      )}
      <Queue link_to={"/category"} />
    </div>
  );
};

export default Play;
