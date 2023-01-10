import { useLocation } from "react-router-dom";

const Chat = () => {
  const { state } = useLocation();
  //const groupName = state.groupName;
  console.log(state);
  return <div>state</div>;
};

export default Chat;
