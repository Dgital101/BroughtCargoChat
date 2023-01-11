import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Chat = () => {
  const { state } = useLocation();
  const { groupData } = state;
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const messageElements = messages.map((messageElement) => {
    return (
      <small className="p-4" key={messages.length + 1}>
        {messageElement}
      </small>
    );
  });

  const goBackToGroups = () => {
    navigate(-1);
  };

  const sendMessage = (event) => {
    event.preventDefault();
    if (message.length === 0) return false;
    setMessages([...messages, message]);
    setMessage("");
  };
  return (
    <section className="flex flex-col h-full">
      <header className="p-2 grow-0 flex gap-x-4 border-b-2 border-[#E5DBD3] fixed w-full">
        <button>
          <img
            src="/assets/images/chat/back-icon.png"
            alt="back button"
            onClick={goBackToGroups}
            className="w-8 h-8"
          />
        </button>
        <div className="flex justify-between items-center">
          <img
            src={groupData.icon}
            className="rounded-full w-12 h-12 md:w-16 md:h-16"
            alt="group logo"
          />
          <div className="ml-2 ">
            <h1 className="text-xl md:text-2xl">{groupData.name}</h1>
            <h2 className="mt-1 text-sm text-gray-500 ">
              {groupData.numberOfMembers} members
            </h2>
          </div>
        </div>
      </header>

      <section className="fixed top-32 left-0  border-b-2 border-black h-auto">
        <section className="absolute flex flex-col-reverse justify-end overflow-y-scroll scrollbar-hide h-full">
          {messageElements}
        </section>
      </section>

      <form
        className="flex w-full h-10 grow-0 items-center mt-auto py-1 px-2 border-4 
        border-[#E5DBD3] fixed bottom-0 left-0 right-0"
        onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="message..."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="w-full h-19 focus:outline-0"
        />
        <button disabled={message.length > 0 ? false : true}>
          <img
            src="/assets/images/chat/send-icon.png"
            alt="send button"
            className="w-8 h-8"
          />
        </button>
      </form>
    </section>
  );
};

export default Chat;
