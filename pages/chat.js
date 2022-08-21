/* eslint-disable react/jsx-key */
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaAngleLeft } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { BsCheckAll } from "react-icons/bs";
import moment from "moment";

import Photo from "../assets/examplePhoto.svg";

import { database } from "../firebase";
import { ref, onValue, set } from "firebase/database";

// custom components
import loginStyle from "../styles/chat.module.css";

const Chat = () => {
	const [message, setMessage] = useState([]);
	const [keys, setKeys] = useState([]);

	React.useEffect(() => {
		const starCountRef = ref(database, `message`);

		onValue(starCountRef, (snapshot) => {
			const data = snapshot.val();

			if (data && typeof data === "object") {
				setMessage(data);
				setKeys(Object.keys(data));
			}
		});
	}, []);

	// console.log(keys);

	return (
		<>
			<Container className={`col-md-4 ${loginStyle.body}`}>
				<div className={loginStyle.header}>
					<Link href="/">
						<FaAngleLeft className={loginStyle.back} size={30} />
					</Link>
					{/* <Link href="/home">
						<a className={loginStyle.filter}>Filter</a>
					</Link> */}
				</div>
				<div>
					<h3 className={loginStyle.head}>Chat</h3>
					{/* <div id="inputSearchHome" className="row mt-3">
						<div className="input-group input-group-lg">
							<span className="input-group-text" id="inputGroup-sizing-lg">
								<FiSearch size={30} color="#A3A3A3" />
							</span>
							<input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Type your message ....." />
						</div>
					</div> */}
					{keys?.map((item) => {
						const data = message[item];
						const lastElement = data[Object.keys(data)[Object.keys(data).length - 1]];
						console.log(lastElement);
						return (
							<Link href={`/chat/${item}`} passHref>
								<Container className={loginStyle.chatBody} style={{ cursor: "pointer" }}>
									<Col className={loginStyle.photo}>
										<Image src={"/images/group-image.png"} height={60} width={60} alt="image-grup" />
									</Col>
									<Col>
										<Container className={loginStyle.text}>
											<Col>
												<Row className={loginStyle.name}>Room: {item}</Row>
												<Row>{lastElement?.message}</Row>
											</Col>
											<Col className={loginStyle.timeAndStatus}>
												<Row className={loginStyle.time}>
													<time>{moment(lastElement?.message_time).format("HH:mm")}</time>
												</Row>
												<Row className={loginStyle.status}>{/* <BsCheckAll size={25} /> */}</Row>
											</Col>
										</Container>
									</Col>
								</Container>
							</Link>
						);
					})}
				</div>
			</Container>
		</>
	);
};

export default Chat;
