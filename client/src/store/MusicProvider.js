import { useReducer } from "react";
import MusicContext from "./music-context";

const defaultState = {
  items: [],
};
const musicReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedItems;
    updatedItems = state.items.concat(action.item);
    return {
      items: updatedItems,
    };
  } else if (action.type === "REMOVE") {
    let updatedItems;
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
