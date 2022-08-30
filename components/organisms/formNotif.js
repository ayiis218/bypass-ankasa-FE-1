/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import back from "../../public/icons/back.svg";
import style from "./style/notif.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

import moment from "moment";
import { ref, update } from "firebase/database";
import { database } from "../../firebase";

const FormNotif = (props) => {
	const router = useRouter();
	const { notification, keys, user } = props?.data;

	const title = (ticket_status) => {
		if (ticket_status === "waiting") {
			return <h6>Ticket Booked</h6>;
		}
		if (ticket_status === "success") {
			return <h6>Congratulation</h6>;
		}
		if (ticket_status === "failed") {
			return <h6>ticket successfully canceled</h6>;
		}
	};

	const getTimeMessage = (createAt) => {
		const now = moment();
		const messageTime = moment(createAt);
		const diff = now.diff(messageTime, "minutes");
		const diffH = now.diff(messageTime, "hours");

		if (diff < 60) {
			return `${diff}M ago`;
		}
		if (now.diff(messageTime, "days") < 1) {
			return `${diffH}H ago`;
		}
		if (now.diff(messageTime, "years") < 1) {
			return `${messageTime.format("DD-MM-YYYY, hh:mm A")}}`;
		} else {
			return `${messageTime.format("DD-MM-YYYY, hh:mm A")}`;
		}
	};

	const clickNotif = (keys, data) => {
		const postData = {
			...data,
			isRead: true,
		};

		const updates = {};
		updates[`/notification/${user}/${keys}`] = postData;
		return update(ref(database), updates);
	};

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
					{keys?.map((item) => {
						let current = notification[item];
						if (current?.isRead) {
							return (
								<div
									key={item}
									className={style.cardIsRead}
									onClick={() => {
										clickNotif(item, current);
										router.push(`/my-booking/detail/${current?.booking_id}`);
									}}
								>
									{title(current?.ticket_status)}
									<p className="text-secondary">{current?.message}</p>
									<p className="text-secondary">{getTimeMessage(current?.createAt)}</p>
								</div>
							);
						} else {
							return (
								<div
									key={item}
									className={style.card}
									onClick={() => {
										clickNotif(item, current);
										router.push(`/my-booking/detail/${current?.booking_id}`);
									}}
								>
									{title(current?.ticket_status)}
									<p className="text-secondary">{current?.message}</p>
									<p className="text-secondary">{getTimeMessage(current?.createAt)}</p>
								</div>
							);
						}
					})}
				</div>
			</div>
		</div>
	);
};

export default FormNotif;
