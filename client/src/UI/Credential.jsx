import React from "react";
import Modal from "./Modal";
import classes from "./Credential.module.css";

const Credential = ({ onClose }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  // console.log(PF)
  return (
    <Modal onClose={onClose}>
      <div className={classes.container}>
        <div className={classes.individual}>
          <div className={classes.img_wrapper}>
            <img
              src={PF + '/credential/Fome.jpg'}
              alt=""
            />
          </div>
          <p>Studen ID : 63010767</p>
          <p>Name : Phurich Chanprasit </p>
          <a href="https://github.com/Phurich63010767" target="_blank" without rel="noreferrer">
            Fome's github
          </a>
        </div>
        <div className={classes.individual}>
          <div className={classes.img_wrapper}>
            <img
              src={PF + '/credential/Newyear.jpg'}
              alt=""
            />
          </div>
          <p>Studen ID : 63010846</p>
          <p>Name : Watanai Maythamaluang</p>
          <a href="https://github.com/Watanai1245" target="_blank"  rel="noreferrer" >
            Newyear's github
          </a>
        </div>
        <div className={classes.individual}>
          <div className={classes.img_wrapper}>
            <img
              src={PF + '/credential/king.jpg'}
              alt=""
            />
          </div>
          <p>Studen ID : 63011075</p>
          <p>Name : Abdulhakim Maha</p>
          <a href="https://github.com/Abdulhakim-Maha" target="_blank" rel="noreferrer" >
            King's github
          </a>
        </div>
        <div className={classes.individual}>
          <div className={classes.img_wrapper}>
            <img
              src={PF + '/credential/Kim.jpg'}
              alt=""
            />
          </div>
          <p>Studen ID : 63011414</p>
          <p>Name : Abdulhakim Mamu</p>
          <a href="https://github.com/hakimparoo" target="_blank" rel="noreferrer" >
            Kim's github
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default Credential;
