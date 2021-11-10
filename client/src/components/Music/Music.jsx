import React from 'react'
import classes from './Music.module.css'
const Music = ({music}) => {
	return (
		<div className={classes.container}>
			<img src={music.img_src} alt="" />	
			<h3>{music.title}</h3>
			<h4>{music.artist}</h4>
		</div>
	)
}

export default Music
