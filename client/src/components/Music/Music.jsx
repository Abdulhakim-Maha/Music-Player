import React, { useState,useContext } from 'react'
import MusicContext from '../../store/music-context'
import classes from './Music.module.css'

const Music = ({music}) => {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	// console.log(PF)
	const musicCtx = useContext(MusicContext)
	const [selected, setSelected] = useState(false)
	// console.log(selected,'from Component')
	const click = () =>{
		setSelected((prev) => !prev)	
		// console.log(selected,'from setSelected')
		if(!selected){
			musicCtx.addItem(music)
		}
		else if(selected){
			musicCtx.removeItem(music.id)
		}
	}
	return (
		<div className={selected? classes.selected_container:classes.container} onClick={click}>
			<img src={PF + music.img_src} alt="" />	
			<h3>{music.title}</h3>
			<p>{music.artist}</p>
		</div>
	)
}

export default Music
