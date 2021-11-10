import React from 'react'
import classes from './Group.module.css'
const Group = ({group,src,click}) => {
	const clickHandler = () =>{
		click(group)
	}
	return (
		<div className={classes.container} onClick={clickHandler}>
			<img src={src} alt="" />	
			<h2 className={classes.group}>{group}</h2>
		</div>
	)
}

export default Group
