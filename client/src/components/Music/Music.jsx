import React from 'react'
import classes from './Music.module.css'
const Music = ({music}) => {
	const click = () =>{
		console.log('click')
	}
	return (
		<div className={classes.container} onClick={click}>
			<img src={music.img_src} alt="" />	
			<h3>{music.title}</h3>
			<p>{music.artist}</p>
		</div>
	)
}

export default Music
