import Message from "./Message";

const ChatBox = () => {
	const messages = [
		{
			id: 1,
			text: "Hello there",
            name:"Ankur Verma",
		},
        {
            id:2,
            text:"Hiii",
            name:"Isha Kumari"
        }
	];
	return <div className="pb-44 pt-20 containerWrap">
        {
            messages.map((message)=>(
                <Message key={message.id} message={message}/>
            ))
        }
    </div>;
};
export default ChatBox;
