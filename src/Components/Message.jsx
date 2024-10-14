import { UserAuth } from "../context/AuthContext";

/* eslint-disable react/prop-types */
const Message = ({ message }) => {
	const {currentUser}=UserAuth()
	console.log(message)
	return (
		<div>
			{message.text}
			<div className={`chat ${message.uid === currentUser.uid ? "chat-end" : "chat-start"}`}>
				<div className="chat-image avatar">
					<div className="w-10 rounded-full">
						<img
							alt="profile photo"
							src={message.avatar}
						/>
					</div>
				</div>
				<div className="chat-header">
				{message.name}
				</div>
				<div className="chat-bubble">{message.text}</div>
			</div>
		</div>
	);
};
export default Message;
