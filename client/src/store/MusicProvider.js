import { useState } from "react";
import MusicContext from "./music-context";

const MusicProvider = (props) => {
  const [items, setItems] = useState([]);
  const handler = (song) => {
	if (items.length == 0){
		setItems(items.push(song))	
	}
	else{
		
	}
  };
  return (
    <MusicContext.Provider
      value={{
        items: items,
        handler: handler,
      }}
    >
      {props.children}
    </MusicContext.Provider>
  );
};

export default MusicProvider;
