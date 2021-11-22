import React from 'react'
import Modal from './Modal'
import classes from './Credential.module.css'

const Credential = ({onClose}) => {
	return (
		<Modal onClose={onClose} >
			<div className="img_wrape">
				<img src="" alt="" />
			</div>	
			<div className="name">Name lastname</div>
			<div className="facebook">Facebook</div>
			<div className="github">something@github.com</div>
		</Modal>
	)
}

export default Credential
