import React from "react";
import Modal from "./Modal";
import classes from "./Credential.module.css";

const Credential = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <div className={classes.container}>
        <div className={classes.individual}>
          <div className={classes.img_wrapper}>
            <img
              src="https://acemodels.gr/wp/wp-content/uploads/2015/09/alexandros_kolaitis13.jpg"
              alt=""
            />
          </div>
          <p>Studen ID : 63010767</p>
          <p>Name : Purich Janprasit </p>
          <a href="https://github.com/Abdulhakim-Maha" target="_blank">
            Fome's github
          </a>
        </div>
        <div className={classes.individual}>
          <div className={classes.img_wrapper}>
            <img
              src="https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2017/03/28/Local-Politics/Images/Supreme_Court_Gorsuch_Moments_22084-70c71-0668.jpg?t=20170517"
              alt=""
            />
          </div>
          <p>Studen ID : 63010846</p>
          <p>Name : Watanai metamalueng</p>
          <a href="https://github.com/Abdulhakim-Maha" target="_blank">
            Newyear's github
          </a>
        </div>
        <div className={classes.individual}>
          <div className={classes.img_wrapper}>
            <img
              src="https://wl-brightside.cf.tsp.li/resize/728x/jpg/f1f/997/50c32c59c3a9a845b6239c430b.jpg"
              alt=""
            />
          </div>
          <p>Studen ID : 63011075</p>
          <p>Name : Abdulhakim Maha</p>
          <a href="https://github.com/Abdulhakim-Maha" target="_blank">
            King's github
          </a>
        </div>
        <div className={classes.individual}>
          <div className={classes.img_wrapper}>
            <img
              src="https://wl-brightside.cf.tsp.li/resize/728x/jpg/49b/9c2/246309532c8a323ff0089d341a.jpg"
              alt=""
            />
          </div>
          <p>Studen ID : 63011414</p>
          <p>Name : Abdulhakim Mamu</p>
          <a href="https://github.com/Abdulhakim-Maha" target="_blank">
            Kim's github
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default Credential;
