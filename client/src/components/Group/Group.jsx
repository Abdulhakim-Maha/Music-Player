import React from 'react'
import classes from './Group.module.css'
const Group = ({group,src,click}) => {
	return (
		<div className={classes.container} onClick={click}>
			<img src={src} alt="" />	
			<h2 className={classes.group}>{group}</h2>
		</div>
	)
}

export default Group
