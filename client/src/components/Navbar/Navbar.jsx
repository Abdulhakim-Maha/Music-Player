import React from 'react'
import classes from './Navbar.module.css'

const Navbar = () => {
	return (
		<div className={classes.container}>
			<div className={classes.logo}>
				<img src="/images/spotify" alt="" />
			</div>
			<div className={classes.title}>Spotify</div>
		</div>
	)
}

export default Navbar
