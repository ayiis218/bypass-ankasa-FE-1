import React from "react";
import style from "../../styles/Home.module.css";
import { FiMail } from "react-icons/fi";
import { VscBell } from "react-icons/vsc";
import Link from "next/link";

const Header = (props) => {
  return (
    <>
      <div className="container">
        <div className="row align-items-center mt-4">
          <div className="col-6">
            <h2>{props.title}</h2>
          </div>
          <div className={`col-6 text-end ${style.notification}`}>
            <div className={style.message}>
              <Link href={"/chat"} passHref>
                <a>
                  <FiMail size={24} color="#595959" />
                </a>
              </Link>
            </div>
            <div>
              <Link href={"/notification"} passHref>
                <a>
                  <VscBell size={24} color="#595959" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
