import React from "react";
import Group from "../../components/Group/Group";
import classes from "./Category.module.css";
const Category = () => {
  return (
    <div className={classes.category}>
      <div className={classes.container}>
        <h2 className={classes.head}>Select Category</h2>
        <ul className={classes.inner_container}>
          <Group group='K-POP' src={'https://i2.wp.com/blackpinkupdate.com/wp-content/uploads/2020/06/BLACKPINK-Official-Logo-HD.jpg?fit=1000%2C1000&ssl=1'} />
          <Group group='Inter' src={'https://images-na.ssl-images-amazon.com/images/I/31qkNEPIv1L.png'} />
          <Group group='Thai' src={'https://pbs.twimg.com/profile_images/887943434677305345/8qm3RVnk.jpg'} />
          <Group group='Chill' src={'https://i.pinimg.com/originals/2b/47/97/2b47975eee04e9cccaea2401e646ba5a.jpg'} />
        </ul>
      </div>
    </div>
  );
};

export default Category;
