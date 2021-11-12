import React from 'react'
import classes from './SongList.module.css'
const SongList = ({song}) => {
	return (
		<div className={classes.container}>
			<img src={song.img_src} alt="" />	
			<div className={classes.wrapper}>
				<h3>{song.title}</h3>
				<p>{song.artist}</p>
			</div>
		</div>
	)
}

export default SongList
