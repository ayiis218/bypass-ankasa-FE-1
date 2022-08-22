import moment from "moment";
import React from "react";
import ChatStyle from "../../styles/ChatPrivate.module.css";

function BubbleReceiver(props) {
	return (
		<>
			<div className={ChatStyle.containerSender}>
				<div className={ChatStyle.bubleSender}>
					<p>{props.message}</p>
					<p style={{ fontSize: 10 }}>{moment(props.message_time).format("HH:mm")}</p>
				</div>
			</div>
		</>
	);
}

export default BubbleReceiver;
