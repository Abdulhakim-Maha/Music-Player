import { useState } from "react";
import UndoIcon from "@mui/icons-material/Undo";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import classes from './ShowMusic.module.css'
import Music from "../../components/Music/Music";

const ShowMusic = ({ sort ,category, undo}) => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    sort(event.target.value);
  };
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2 className={classes.head}>Select Music</h2>
        <div className="search">
          <input type="text" />
          <button>go</button>
          <button>default</button>
        </div>
        <Box sx={{ minWidth: 80 ,marginRight:'1rem'}}>
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel
              id="demo-simple-select-label"
              className={classes.inpLabel}
              sx ={{color:'#fff'}}
            >
              Sort
            </InputLabel>
            <Select
              className={classes.selected}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              sx ={{color:'#fff'}}
              onChange={handleChange}
            >
              <MenuItem value={"Title"}>Title</MenuItem>
              <MenuItem value={"Artist"}>Artist</MenuItem>
              <MenuItem value={"Default"}>Default</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <UndoIcon
          className={classes.undoicon}
          sx={{ fontSize: 30 }}
          onClick={undo}
        />
      </div>
      <ul className={classes.inner_container_music}>
        {category.map((music) => {
          return <Music key={music.id} music={music} />;
        })}
      </ul>
    </div>
  );
};

export default ShowMusic;