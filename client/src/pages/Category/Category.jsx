import React, { useState } from "react";
import Group from "../../components/Group/Group";
import Music from "../../components/Music/Music";
import classes from "./Category.module.css";
import UndoIcon from "@mui/icons-material/Undo";
import { INTER, KPOP, THAI, CHILL} from "../../DummyData";

const Category = () => {
  const [selected, setSelected] = useState(false);
  const [group, setGroup] = useState([]);
  console.log(group)
  const clickHandler = (type) => {
    if(type === 'Inter'){
      setGroup(INTER)
    }
    else if(type === 'K-POP'){
      setGroup(KPOP)
    }
    else if(type === 'Thai'){
      setGroup(THAI)
    }
    else if(type === 'Chill'){
      setGroup(CHILL)
    }
    setSelected((prev) => !prev);
  };
  const undoHandler = () =>{
    setSelected((prev) => !prev);
  }
  const Inter = () => {
    return (
      <div className={classes.category}>
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
            {group.map(music => {
              return <Music music={music} />
            })}
          </ul>
        </div>
      </div>
    );
  };
  const Default = () => {
    return (
      <div className={classes.category}>
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
              group="Chill"
              src={
                "https://i.pinimg.com/originals/2b/47/97/2b47975eee04e9cccaea2401e646ba5a.jpg"
              }
              click={clickHandler}
            />
          </ul>
        </div>
      </div>
    );
  };
  return <React.Fragment>{!selected ? <Default /> : <Inter />}</React.Fragment>;
};

export default Category;
