import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaAngleLeft } from "react-icons/fa";
import { FiSearch, FiSend } from "react-icons/fi";
import { BsCheckAll } from "react-icons/bs";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import Photo from "../../assets/examplePhoto.svg";

// custom components
import ChatStyle from "../../styles/ChatPrivate.module.css";

import BubbleSender from "../../components/organisms/bubleSender";
import BubbleReceiver from "../../components/organisms/BubbleReceiver";

import { database } from "../../firebase";
import { ref, onValue, set } from "firebase/database";

const Chat = () => {
	const router = useRouter();
	const messagesEndRef = React.useRef(null);
	const loggedInUserState = useSelector((state) => state.loggedInUser);
	const { user } = loggedInUserState;
	const { id } = router.query;

	const [message, setMessage] = useState([]);
	const [keys, setKeys] = useState([]);
	const [input, setInput] = useState("");

	React.useEffect(() => {
		const starCountRef = ref(database, `message/${id}`);
		scrollToBottom();

		onValue(starCountRef, (snapshot) => {
			const data = snapshot.val();

			if (data && typeof data === "object") {
				setMessage(data);
				setKeys(Object.keys(data));
			}
		});
	}, [id]);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	React.useEffect(() => {
		scrollToBottom();
	}, [message]);

	const handleSend = (e) => {
		e.preventDefault();

		const starCountRef = ref(database, `message/${id}/${new Date().getTime()}`);
		set(starCountRef, {
			message: input,
			message_time: new Date().getTime(),
			user_id: user?.user_id,
			full_name: user?.full_name,
			message_status: "sended",
		});
		setInput("");
	};
	return (
		<>
			<Container>
				<div className={ChatStyle.header}>
					<FaAngleLeft size={30} color="#fff" />
					<h4>Room: {id}</h4>
				</div>

				<div className={ChatStyle.content}>
					{keys?.map((item) => {
						let current = message[item];
						if (current?.user_id === user?.user_id) {
							return <BubbleReceiver {...current} />;
						} else {
							return <BubbleSender {...current} />;
						}
					})}
					<div ref={messagesEndRef} />
				</div>

				<div className={ChatStyle.input}>
					<form className="d-flex" onSubmit={handleSend}>
						<input type="text" className="form-control rounded-0" id="text" placeholder="Insert your message here..." value={input} onChange={(e) => setInput(e.target.value)} />
						<button type="submit" className={`btn btn-light d-flex align-items-center rounded-0`} style={{ borderRadius: 0 }}>
							<FiSend className="me-2" />
							Send
						</button>
					</form>
				</div>
			</Container>
		</>
	);
};

export default Chat;
