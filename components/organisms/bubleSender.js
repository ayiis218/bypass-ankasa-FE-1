import React from "react";
import ChatStyle from "../../styles/ChatPrivate.module.css";
import moment from "moment";
import axios from "axios";

function BubbleSender(props) {
	return (
		<>
			<div className={ChatStyle.containerReceiver}>
				<div className={ChatStyle.bubleReceiver}>
					<h6 className="m-0">{props?.full_name}</h6>
					<p>{props.message}</p>
					<p style={{ fontSize: 10, display: "flex", justifyContent: "flex-end" }}>{moment(props.message_time).format("HH:mm")}</p>
				</div>
			</div>
		</>
	);
}

export default BubbleSender;
