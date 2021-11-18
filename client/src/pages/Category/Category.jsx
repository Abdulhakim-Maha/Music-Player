import React, { useState, useEffect } from "react";
import Group from "../../components/Group/Group";
import Music from "../../components/Music/Music";
import classes from "./Category.module.css";
import UndoIcon from "@mui/icons-material/Undo";
// import { INTER, KPOP, THAI, JPOP } from "../../../public/DummyData";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Queue from "../../components/Queue/Queue";
import axios from "axios";

const Category = () => {
  const [selected, setSelected] = useState(false);
  const [data, setData] = useState(null);
  const [group, setGroup] = useState([]);
  console.log(data);
  useEffect(() => {
    const fechData = async () => {
      const res = await axios.get("/getData/title");
      setData(res.data);
    };
    fechData();
  }, []);

  const SortTofechData = async (type) => {
    const res = await axios.get("/getData/"+ type);
    setData(res.data);
  };

  const clickHandler = (type) => {
    if (type === "Inter") {
      setGroup(data.INTER);
    } else if (type === "K-POP") {
      setGroup(data.KPOP);
    } else if (type === "Thai") {
      setGroup(data.THAI);
    } else if (type === "J-POP") {
      setGroup(data.JPOP);
    }
    setSelected((prev) => !prev);
  };
  const undoHandler = () => {
    setSelected((prev) => !prev);
  };

  // Component
  const ShowMusic = ({sort}) => {
    const [age, setAge] = useState("");

    const handleChange = (event) => {
      setAge(event.target.value);
      // console.log("/getData/" + event.target.value)
      // const fechData = async () => {
      //   const res = await axios.get("/getData/" + event.target.value);
      //   setData(res.data);
      // };
      // fechData();
      sort(event.target.value)
    };
    return (
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <h2 className={classes.head}>Select Music</h2>
          <Box sx={{ minWidth: 80 }}>
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel
                id="demo-simple-select-label"
                className={classes.inputLabel}
              >
                Sort
              </InputLabel>
              <Select
                className={classes.select}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
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
            sx={{ fontSize: 50 }}
            onClick={undoHandler}
          />
        </div>
        <ul className={classes.inner_container_music}>
          {group.map((music) => {
            return <Music key={music.id} music={music} />;
          })}
        </ul>
      </div>
    );
  };
  const Default = () => {
    return (
      <div className={classes.container}>
        <h2 className={classes.head}>Select Category</h2>
        <ul className={classes.inner_container}>
          <Group
            group="K-POP"
            src={
              "https://i2.wp.com/blackpinkupdate.com/wp-content/uploads/2020/06/BLACKPINK-Official-Logo-HD.jpg?fit=1000%2C1000&ssl=1"
            }
            click={clickHandler}
          />
          <Group
            group="Inter"
            src={
              "https://images-na.ssl-images-amazon.com/images/I/31qkNEPIv1L.png"
            }
            click={clickHandler}
          />
          <Group
            group="Thai"
            src={
              "https://pbs.twimg.com/profile_images/887943434677305345/8qm3RVnk.jpg"
            }
            click={clickHandler}
          />
          <Group
            group="J-POP"
            src={
              "https://pm1.narvii.com/6044/42161dd69e7af1871daac0d43fc2429c70fb12c6_hq.jpg"
            }
            click={clickHandler}
          />
        </ul>
      </div>
    );
  };
  return (
    <div className={classes.category}>
      {!selected ? <Default /> : <ShowMusic sort={SortTofechData} />}
      <Queue link_to={"/play"} />
    </div>
  );
};

export default Category;
