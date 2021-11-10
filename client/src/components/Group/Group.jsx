import React from 'react'
import classes from './Group.module.css'
const Group = ({group,src}) => {
	return (
		<div className={classes.container}>
			<img src={src} alt="" />	
			<h2 className={classes.group}>{group}</h2>
		</div>
	)
}

export default Group
