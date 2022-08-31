import React from "react";
import style from "../../styles/Home.module.css";
import { FiMail } from "react-icons/fi";
import { VscBell } from "react-icons/vsc";
import Link from "next/link";

//Redux
import { useSelector } from "react-redux";

// Firebase
import { database } from "../../firebase";
import { ref, onValue, remove } from "firebase/database";

const Header = (props) => {
	const { loggedInUser } = useSelector((state) => state);
	const { user } = loggedInUser;
	const [notification, setNotification] = React.useState({});
	const [keys, setKeys] = React.useState([]);
	const [isRead, setIsRead] = React.useState(false);

	React.useEffect(() => {
		const starCountRef = ref(database, `notification/${user?.user_id}`);

		onValue(starCountRef, (snapshot) => {
			const data = snapshot.val();

			if (data && typeof data === "object") {
				setNotification(data);
				setKeys(Object.keys(data).reverse().slice(0, 10));
			}
		});
	}, [user?.user_id]);

	React.useEffect(() => {
		const lengthNotif = [];
		keys.map((item) => {
			let current = notification[item];
			if (!current?.isRead) {
				lengthNotif.push(item);
			}
		});

		if (lengthNotif.length) {
			setIsRead(true);
		} else {
			setIsRead(false);
		}
	}, [keys, notification]);

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
							<div className={style.notif}>
								<Link href={"/notification"} passHref>
									<a>
										<VscBell size={24} color="#595959" />
									</a>
								</Link>
								{isRead ? <span className={style.notifBadge} /> : null}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
