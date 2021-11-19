import React, { useState, useEffect } from "react";
import Group from "../../components/Group/Group";
// import Music from "../../components/Music/Music";
import classes from "./Category.module.css";
// import UndoIcon from "@mui/icons-material/Undo";
// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
import Queue from "../../components/Queue/Queue";
import axios from "axios";
import ShowMusic from '../../components/ShowMusic/ShowMusic'

const Category = () => {
  const [selected, setSelected] = useState(false);
  const [data, setData] = useState(null);
  const [group, setGroup] = useState([]);
  const [cate, setCate] = useState([])
  // const [isFetching, setIsFetching] = useState(false)
  // console.log(data);
  useEffect(() => {
    const fechData = async () => {
      const res = await axios.get("/getData/title");
      setData(res.data);
    };
    fechData();
  }, []);

  const SortTofechData = async (type) => {
    // setSelected(false)
    // setIsFetching(true)
    const res = await axios.get("/getData/" + type);
    setData(res.data);
    console.log(res.data)
    // setGroup(data.INTER);
    setGroup([])
    if (cate === "Inter") {
      setGroup(res.data.INTER);
      console.log(group)
    } else if (cate === "K-POP") {
      setGroup(res.data.KPOP);
    } else if (cate === "Thai") {
      setGroup(res.data.THAI);
    } else if (cate === "J-POP") {
      setGroup(res.data.JPOP);
    }
    // setSelected(true)
    // console.log(res.data.INTER)
    // setGroup(res.data)
    // setIsFetching(false)
    // setGropToSort(res.data)
  };
  // const setGropToSort = (data) =>{
  //   if (cate === "Inter") {
  //     setGroup(data.INTER);
  //     console.log(group)
  //   } else if (cate === "K-POP") {
  //     setGroup(data.KPOP);
  //   } else if (cate === "Thai") {
  //     setGroup(data.THAI);
  //   } else if (cate === "J-POP") {
  //     setGroup(data.JPOP);
  //   }
  // }

  const clickHandler = (type) => {
    if (type === "Inter") {
      setCate('Inter')
      setGroup(data.INTER);
    } else if (type === "K-POP") {
      setCate('K-POP')
      setGroup(data.KPOP);
    } else if (type === "Thai") {
      setCate('Thai')
      setGroup(data.THAI);
    } else if (type === "J-POP") {
      setCate('J-POP')
      setGroup(data.JPOP);
    }
    setSelected((prev) => !prev);
  };
  const undoHandler = () => {
    setSelected((prev) => !prev);
  };

  // Component
  // const ShowMusic = ({ sort ,category}) => {
  //   const [age, setAge] = useState("");

  //   const handleChange = (event) => {
  //     setAge(event.target.value);
  //     sort(event.target.value);
  //   };
  //   return (
  //     <div className={classes.container}>
  //       <div className={classes.wrapper}>
  //         <h2 className={classes.head}>Select Music</h2>
  //         <Box sx={{ minWidth: 80 }}>
  //           <FormControl fullWidth className={classes.formControl}>
  //             <InputLabel
  //               id="demo-simple-select-label"
  //               className={classes.inputLabel}
  //             >
  //               Sort
  //             </InputLabel>
  //             <Select
  //               className={classes.select}
  //               labelId="demo-simple-select-label"
  //               id="demo-simple-select"
  //               value={age}
  //               label="Age"
  //               onChange={handleChange}
  //             >
  //               <MenuItem value={"Title"}>Title</MenuItem>
  //               <MenuItem value={"Artist"}>Artist</MenuItem>
  //               <MenuItem value={"Default"}>Default</MenuItem>
  //             </Select>
  //           </FormControl>
  //         </Box>
  //         <UndoIcon
  //           className={classes.undoicon}
  //           sx={{ fontSize: 50 }}
  //           onClick={undoHandler}
  //         />
  //       </div>
  //       <ul className={classes.inner_container_music}>
  //         {category.map((music) => {
  //           return <Music key={music.id} music={music} />;
  //         })}
  //       </ul>
  //     </div>
  //   );
  // };
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
      {!selected ? <Default /> : <ShowMusic sort={SortTofechData} category={group} undo={undoHandler} />}
      {/* {!selected && <Default/>} */}
      {/* {!isFetching && selected && <ShowMusic sort={SortTofechData} category={group} />} */}
      {/* {isFetching && <p>...Loading</p>} */}
      <Queue link_to={"/play"} />
    </div>
  );
};

export default Category;
