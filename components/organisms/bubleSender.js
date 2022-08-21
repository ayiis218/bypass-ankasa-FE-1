import React from "react";
import ChatStyle from "../../styles/ChatPrivate.module.css";
import moment from "moment";

function BubbleSender(props) {
	return (
		<>
			<div className={ChatStyle.containerReceiver}>
				<div className={ChatStyle.bubleReceiver}>
					<p>{props.message}</p>
					<p style={{ fontSize: 10, display: "flex", justifyContent: "flex-end" }}>{moment(props.message_time).format("HH:mm")}</p>
				</div>
			</div>
		</>
	);
}

export default BubbleSender;
