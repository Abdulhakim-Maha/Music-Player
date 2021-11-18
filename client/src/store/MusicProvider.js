import { useReducer } from "react";
import MusicContext from "./music-context";
import axios from "axios";

const defaultState = {
  items: [],
};

const musicReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedItems = [];
    axios
      .post("/postMusic", {
        id: action.item.id,
        title: action.item.title,
        artist: action.item.artist,
        img_src: action.item.img_src,
        src: action.item.src,
      })
      .then((res) => {
        console.log(res.data);
        updatedItems = res.data;
        return {
          items: updatedItems,
        };
      });
    updatedItems = state.items.concat(action.item);
    return {
      items: updatedItems,
    };
  } else if (action.type === "REMOVE") {
    let updatedItems;
    axios
      .delete("/deleteMusic?id=" + action.id)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    updatedItems = state.items.filter((item) => item.id !== action.id);
    return {
      items: updatedItems,
    };
  }
  return defaultState;
};
const MusicProvider = (props) => {
  const [musicState, dispatchMusicState] = useReducer(
    musicReducer,
    defaultState
  );
  const addItemHandler = (item) => {
    dispatchMusicState({
      type: "ADD",
      item: item,
    });
  };
  const removeItemhandler = (id) => {
    dispatchMusicState({
      type: "REMOVE",
      id: id,
    });
  };
  return (
    <MusicContext.Provider
      value={{
        items: musicState.items,
        addItem: addItemHandler,
        removeItem: removeItemhandler,
      }}
    >
      {props.children}
    </MusicContext.Provider>
  );
};

export default MusicProvider;
