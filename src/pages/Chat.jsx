import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase/firebase.config.js";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
  limit,
  QuerySnapshot,
} from "firebase/firestore";
import MessageBubble from "../components/chat/MessageBubble.jsx";
import BackToHome from "../components/button/navigate_button/BackToHome.jsx";
const Chat = () => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [receivedMessages, setReceivedMessages] = useState([]);
  const messageCollection = collection(db, "message");
  const messageData = {
    text: currentMessage,
    name: auth?.currentUser?.displayName,
    avatar: auth?.currentUser?.photoURL,
    createdAt: serverTimestamp(),
    userId: auth?.currentUser?.uid,
  };
  const sendMessage = async (e) => {
    e.preventDefault();
    if (currentMessage.trim() === "") {
      alert("Invalid message");
      return;
    }
    try {
      await addDoc(messageCollection, messageData);
    } catch (error) {
      console.log(error.message);
    }
    setCurrentMessage("");
  };
  const handleGetMessages = async () => {
    try {
      const res = await getDocs(messageCollection);
      const mapRes = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setReceivedMessages(mapRes);
    } catch (error) {}
  };
  useEffect(() => {
    handleGetMessages();
    const keepGettingMessages = onSnapshot(
      query(messageCollection, orderBy("createdAt")),
      (item) => {
        const mapItem = item.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setReceivedMessages(mapItem);
      }
    );
    return keepGettingMessages;
  }, []);

  return (
    <div>
      <div>
        <div className="flex h-screen antialiased text-gray-800">
          <div className="flex flex-row h-full w-full overflow-x-hidden bg-black">
            <div className="flex flex-col flex-auto h-full p-6">
              <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-white h-full p-4">
                <div className="text-black">
                  <BackToHome />
                </div>
                <div className="flex flex-col h-full overflow-x-auto mb-4">
                  <div className="flex flex-col h-full">
                    {receivedMessages?.map((item, index) => {
                      return <MessageBubble key={index + 1} {...item} />;
                    })}
                    <div className="grid grid-cols-12 gap-y-2"></div>
                  </div>
                </div>
                <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
                  <div></div>
                  <div className="flex-grow ml-4">
                    <div className="relative w-full">
                      <input
                        type="text"
                        className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                        onChange={(e) => setCurrentMessage(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <button className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0">
                      <span onClick={(e) => sendMessage(e)}>Send</span>
                      <span className="ml-2">
                        <svg
                          className="w-4 h-4 transform rotate-45 -mt-px"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
