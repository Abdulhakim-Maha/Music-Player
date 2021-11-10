import React, { useState } from "react";
import Group from "../../components/Group/Group";
import Music from "../../components/Music/Music";
import classes from "./Category.module.css";
const Category = () => {
  const [selected, setSelected] = useState(false);
  const clickHandler = () => {
    setSelected((prev) => !prev)
  };
  const Inter = () => {
    return (
      <div className={classes.category}>
        <div className={classes.container}>
          <h2 className={classes.head}>Select Category</h2>
          <ul className={classes.inner_container}>
            <Music/>
            <Music/>
            <Music/>
            <Music/>
            <Music/>
            <Music/>
            <Music/>
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
            />
            <Group
              group="Chill"
              src={
                "https://i.pinimg.com/originals/2b/47/97/2b47975eee04e9cccaea2401e646ba5a.jpg"
              }
            />
          </ul>
        </div>
      </div>
    );
  };
  return <React.Fragment>{!selected ? <Default /> : <Inter />}</React.Fragment>;
};

export default Category;
