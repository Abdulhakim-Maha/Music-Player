import React, { useState, useEffect } from "react";
import Group from "../../components/Group/Group";
import classes from "./Category.module.css";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Queue from "../../components/Queue/Queue";
import axios from "axios";
import ShowMusic from "../../components/ShowMusic/ShowMusic";

const Category = () => {
  const [selected, setSelected] = useState(false);
  const [data, setData] = useState(null);
  const [group, setGroup] = useState([]);
  const [cate, setCate] = useState([]);

  useEffect(() => {
    const fechData = async () => {
      const res = await axios.get("/getData/title");
      setData(res.data);
    };
    fechData();
  }, []);

  const SearchTofetchData = async (input) => {
    // console.log(input + ':' + cate);
    const res = await axios.get("/search/"+cate+'?inp='+input)
    // console.log(res.data)
    setGroup(res.data.music)
  };
  
  const SortTofechData = async (type) => {
    const res = await axios.get("/getData/" + type);
    setData(res.data);
    // console.log(res.data)
    setGroup([]);
    if (cate === "Inter") {
      setGroup(res.data.INTER);
      // console.log(group)
    } else if (cate === "K-POP") {
      setGroup(res.data.KPOP);
    } else if (cate === "Thai") {
      setGroup(res.data.THAI);
    } else if (cate === "J-POP") {
      setGroup(res.data.JPOP);
    }
  };

  const clickHandler = (type) => {
    if (type === "Inter") {
      setCate("Inter");
      setGroup(data.INTER);
    } else if (type === "K-POP") {
      setCate("K-POP");
      setGroup(data.KPOP);
    } else if (type === "Thai") {
      setCate("Thai");
      setGroup(data.THAI);
    } else if (type === "J-POP") {
      setCate("J-POP");
      setGroup(data.JPOP);
    }
    setSelected((prev) => !prev);
  };
  const undoHandler = () => {
    setSelected((prev) => !prev);
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
      <div className={classes.backToHome}>
        <Link to="/">
          <IconButton>
            <HomeIcon sx={{ fontSize: 50, color: "white" }} />
          </IconButton>
        </Link>
      </div>
      {!selected ? (
        <Default />
      ) : (
        <ShowMusic
          sort={SortTofechData}
          search={SearchTofetchData}
          category={group}
          undo={undoHandler}
        />
      )}
      <Queue link_to={"/play"} />
    </div>
  );
};

export default Category;
