/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import back from "../../public/icons/back.svg";
import style from "./style/notif.module.css";
import Link from "next/link";

const formNotif = () => {
  return (
    <div className={style.section}>
      <div className="container fluid">
        <div className="row mt-4">
          <div className="col-2 col-lg-2 m-3">
            <Link href={"/"} passHref>
              <Image className={style.img} src={back} />
            </Link>
          </div>
          <div className="col-8 col-lg-8 m-3 mt-3 d-flex justify-content-end">
            <p className={style.label}>clear</p>
          </div>
          <h3>Notifications</h3>
          <div className={style.card}>
            <h6>Congratulations</h6>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore....
            </p>
            <p className="text-secondary">5h ago</p>
          </div>
          <div className={style.card}>
            <h6>Congratulations</h6>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore....
            </p>
            <p className="text-secondary">5h ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default formNotif;
