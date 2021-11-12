import React from "react";

const MusicContext = React.createContext({
	items : [],
	handler: (item) => {},
})

export default MusicContext