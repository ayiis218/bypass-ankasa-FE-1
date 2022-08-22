import React from "react";
import Footer from "../../components/organisms/footer";
import style from "../../styles/Profile.module.css";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/features/authSlice";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import Link from 'next/link'

const Profile = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const loggedInUserState = useSelector((state) => state.loggedInUser);
	const { user } = loggedInUserState;

	const handleLogout = () => {
		dispatch(logout());
		router.replace("login");
	};

	return (
		<>
			<div className={`row justify-content-center ${style.bodyWrapper}`}>
				<div className={`col-md-4 p-0 ${style.profileWrapper}`}>
					<div className={`${style.fixHeight}`}>
						{user ? (
							<div className="container">
								<div className="container">
									<div className="row align-items-center mt-4">
										<div className="col-6">
											<span className={style.titleProfile}>Profile</span>
										</div>
										<div className="col-6 text-end">
											<Link href="profile/edit" passHref>
												<a className={style.titleEdit}>Edit</a>
											</Link>
										</div>
									</div>
									<div className={`row text-center ${style.profileImage} my-4`}>
										<div>
											{user.user_image ? (
												<Image className="avatar" src={user.user_image} alt="avatar" width={137} height={137} />
											) : (
												<div className="mb-3">
													<BiUser size={"6rem"} />
												</div>
											)}
										</div>
										<div>
											<h5 className="text-capitalize">{user.full_name}</h5>
										</div>
										<div>{user.nationality && <p>{user.nationality}</p>}</div>
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
						) : (
							<div className="h-100 d-flex align-items-center justify-content-center">
								<div className="text-center">
									<p>You have not signed in yet</p>
									<Button>Sign In</Button>
								</div>
							</div>
						)}
					</div>
					<Footer />
				</div>
			</div>
		</>
	);
};

export default Profile;
