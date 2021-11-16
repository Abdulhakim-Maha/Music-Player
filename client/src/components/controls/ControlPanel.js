import React from "react";
import Button from "./Button";
import "./control-panel.css";
import { IconButton } from "@mui/material";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";

function ControlPanel({ play, isPlaying, duration, currentTime ,nextClick, prevClick}) {
  function secondsToHms(seconds) {
    if (!seconds) return "00m 00s";

    let duration = seconds;
    let hours = duration / 3600;
    duration = duration % 3600;

    let min = parseInt(duration / 60);
    duration = duration % 60;

    let sec = parseInt(duration);

    if (sec < 10) {
      sec = `0${sec}`;
    }
    if (min < 10) {
      min = `0${min}`;
    }

    if (parseInt(hours, 10) > 0) {
      return `${parseInt(hours, 10)}h ${min}m ${sec}s`;
    } else if (min === 0) {
      return `00m ${sec}s`;
    } else {
      return `${min}m ${sec}s`;
    }
  }

  return (
    <div className="control-panel">
      <div className="timer">{secondsToHms(currentTime)}</div>
      <div className="wrapper">
        <IconButton size='medium' >
          <SkipPreviousIcon sx={{fontSize:40}} className='prev' onClick={prevClick} />
        </IconButton>
        <Button play={play} isPlaying={isPlaying} />
        <IconButton>
          <SkipNextIcon sx={{fontSize:40}} className='next' onClick={nextClick} />
        </IconButton>
      </div>
      <div className="timer">{secondsToHms(duration)}</div>
    </div>
  );
}
export default ControlPanel;
