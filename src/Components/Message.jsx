const Message = ({ message }) => {
	return (
		<div>
			{message.text}
			<div className="chat chat-start">
				<div className="chat-image avatar">
					<div className="w-10 rounded-full">
						<img
							alt="profile photo"
							src=""
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
