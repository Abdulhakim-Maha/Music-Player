import React from "react";

const MusicContext = React.createContext({
	items : [],
	addItem: (item) => {},
	removeItem: (id) => {},
})

export default MusicContext