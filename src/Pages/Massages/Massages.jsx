import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";

const Messages = () => {
  const { data, loading } = useFetch("/mock.json");
  const [activeChat, setActiveChat] = useState(null);
  const [newMsg, setNewMsg] = useState("");

  if (loading) return <p className="p-6 text-center">Loading...</p>;

  const sendMessage = () => {
    if (!newMsg.trim()) return;

    const updated = {
      ...activeChat,
      thread: [
        ...activeChat.thread,
        {
          messageId: Date.now(),
          sender: "You",
          content: newMsg,
          timestamp: new Date().toISOString(),
          status: "Sent"
        }
      ]
    };

    setActiveChat(updated);
    setNewMsg("");
  };

  return (
    <div className="min-h-screen bg-base-200 p-6 grid md:grid-cols-3 gap-6">
      
      {/* Chat List */}
      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <h2 className="font-bold text-lg mb-3">💬 Messages</h2>

          {data.messages.map((m) => (
            <div
              key={m.id}
              className="p-3 border-b cursor-pointer hover:bg-base-200"
              onClick={() => setActiveChat(m)}
            >
              <div className="flex justify-between">
                <p className="font-semibold">{m.name}</p>
                {m.unread > 0 && (
                  <span className="badge badge-primary badge-sm">
                    {m.unread}
                  </span>
                )}
              </div>
              <p className="text-sm opacity-70 truncate">
                {m.lastMessage}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="card bg-base-100 shadow md:col-span-2">
        <div className="card-body flex flex-col h-[70vh]">
          {activeChat ? (
            <>
              <h2 className="font-bold text-lg border-b pb-2">
                {activeChat.name}
              </h2>

              <div className="flex-1 overflow-y-auto py-4 space-y-3">
                {activeChat.thread.map((msg) => (
                  <div
                    key={msg.messageId}
                    className={`chat ${
                      msg.sender === "You"
                        ? "chat-end"
                        : "chat-start"
                    }`}
                  >
                    <div className="chat-bubble">
                      {msg.content}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  className="input input-bordered w-full"
                  value={newMsg}
                  onChange={(e) => setNewMsg(e.target.value)}
                  placeholder="Type message..."
                />
                <button
                  onClick={sendMessage}
                  className="btn btn-primary"
                >
                  Send
                </button>
              </div>
            </>
          ) : (
            <p className="text-center my-auto opacity-60">
              Select a conversation
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;
