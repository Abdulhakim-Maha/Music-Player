import React, { useState } from "react";
import Group from "../../components/Group/Group";
import Music from "../../components/Music/Music";
import classes from "./Category.module.css";
import UndoIcon from "@mui/icons-material/Undo";
import { INTER, KPOP, THAI, CHILL } from "../../DummyData";
import Queue from "../../components/Queue/Queue";

const Category = () => {
  const [selected, setSelected] = useState(false);
  const [group, setGroup] = useState([]);
  const clickHandler = (type) => {
    if (type === "Inter") {
      setGroup(INTER);
    } else if (type === "K-POP") {
      setGroup(KPOP);
    } else if (type === "Thai") {
      setGroup(THAI);
    } else if (type === "J-POP") {
      setGroup(CHILL);
    }
    setSelected((prev) => !prev);
  };
  const undoHandler = () => {
    setSelected((prev) => !prev);
  };
  const Inter = () => {
    return (
        <div className={classes.container}>
          <div className={classes.wrapper}>
            <h2 className={classes.head}>Select Music</h2>
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
      {!selected ? <Default /> : <Inter />}
      <Queue/>
    </div>
  );
};

export default Category;
