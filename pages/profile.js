import React from "react";
import Footer from "../components/organisms/footer";
import style from "../styles/Profile.module.css";
import imgUser from "../public/images/user.jpeg";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";
import { IoMdSettings } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/features/authSlice'
import { useRouter } from 'next/router'
// import jwtDecode from "jwt-decode";

const Profile = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  // const authState = useSelector(state => state.auth)
  // const token = authState?.token

  const handleLogout = () => {
    dispatch(logout())
    router.replace('login')
  }

  // const decoded = jwtDecode(token)
  // console.log(decoded.email)

  return (
    <>
      <div className={`row justify-content-center ${style.bodyWrapper}`}>
        <div className={`col-md-4 p-0 ${style.profileWrapper}`}>
          <div className={`${style.fixHeight}`}>
            <div className="container">
              <div className="container">
                <div className="row align-items-center mt-4">
                  <div className="col-6">
                    <span className={style.titleProfile}>Profile</span>
                  </div>
                  <div className="col-6 text-end">
                    <span className={style.titleEdit}>Edit</span>
                  </div>
                </div>
                <div className={`row text-center ${style.profileImage} my-4`}>
                  <div>
                    <Image src={imgUser} alt="avatar" width={137} height={137} />
                  </div>
                  <div>
                    <h5>Mike Kowalski</h5>
                  </div>
                  <div>
                    <p>Medan, Indonesia</p>
                  </div>
                </div>
                <div className={style.profileMenu}>
                  <div className="row align-items-center mb-3">
                    <div className="col-2">
                      <AiFillStar color="#979797" size={30} />
                    </div>
                    <div className="col-8">
                      <span>My Review</span>
                    </div>
                    <div className="col-2 text-end">
                      <FiChevronRight color="#979797" size={30} />
                    </div>
                  </div>
                  <div className="row align-items-center mb-3">
                    <div className="col-2">
                      <IoMdSettings color="#979797" size={30} />
                    </div>
                    <div className="col-8">
                      <span>Setting</span>
                    </div>
                    <div className="col-2 text-end">
                      <FiChevronRight color="#979797" size={30} />
                    </div>
                  </div>
                  <div className="row align-items-center mb-3" onClick={handleLogout}>
                    <div className="col-2">
                      <MdLogout color="#f24545" size={30} />
                    </div>
                    <div className="col-8">
                      <span className={style.logout}>Logout</span>
                    </div>
                    <div className="col-2 text-end">
                      <FiChevronRight color="#f24545" size={30} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Profile;
