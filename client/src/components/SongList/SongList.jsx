import React, { useContext } from "react";
import MusicContext from "../../store/music-context";
import classes from "./SongList.module.css";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const SongList = ({ song }) => {
  const musicCtx = useContext(MusicContext);
  const removeSong = () => {
    musicCtx.removeItem(song.id);
  };
  return (
    <div className={classes.container}>
      <img src={song.img_src} alt="" />
      <div className={classes.wrapper}>
        <h3>{song.title}</h3>
        <p>{song.artist}</p>
      </div>
      <div className={classes.btn_cancel}>
		<RemoveCircleIcon className={classes.cancel} onClick={removeSong}/>
      </div>
    </div>
  );
};

export default SongList;
