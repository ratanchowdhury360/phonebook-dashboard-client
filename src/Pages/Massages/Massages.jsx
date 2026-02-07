import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";

const Messages = () => {
  const { data, loading } = useFetch("/mock.json");
  const [activeChat, setActiveChat] = useState(null);

  if (loading) {
    return <p className="p-6 text-center">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-base-200 p-4 sm:p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* ===== CHAT LIST ===== */}
        <div
          className={`card bg-base-100 shadow ${
            activeChat ? "hidden md:block" : ""
          }`}
        >
          <div className="card-body p-0">
            <h2 className="text-lg font-bold p-4 border-b">
              💬 Messages
            </h2>

            {data.messages.map((m) => (
              <div
                key={m.id}
                onClick={() => setActiveChat(m)}
                className={`p-4 cursor-pointer hover:bg-base-200 border-b ${
                  activeChat?.id === m.id ? "bg-base-200" : ""
                }`}
              >
                <div className="flex justify-between items-center">
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

        {/* ===== CHAT WINDOW ===== */}
        <div
          className={`card bg-base-100 shadow md:col-span-2 ${
            !activeChat ? "hidden md:block" : ""
          }`}
        >
          <div className="card-body flex flex-col h-[70vh]">
            {activeChat ? (
              <>
                {/* Header */}
                <div className="flex items-center gap-3 border-b pb-3">
                  <button
                    className="btn btn-ghost btn-sm md:hidden"
                    onClick={() => setActiveChat(null)}
                  >
                    ←
                  </button>
                  <div className="avatar placeholder">
                    <div className="bg-primary text-primary-content rounded-full w-10">
                      <span>{activeChat.avatar}</span>
                    </div>
                  </div>
                  <h2 className="text-lg font-bold">
                    {activeChat.name}
                  </h2>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto py-4 space-y-3">
                  {activeChat.thread.map((msg) => {
                    const isYou = msg.sender === "You";
                    return (
                      <div
                        key={msg.messageId}
                        className={`chat ${
                          isYou ? "chat-end" : "chat-start"
                        }`}
                      >
                        <div
                          className={`chat-bubble ${
                            isYou
                              ? "chat-bubble-primary"
                              : "chat-bubble-secondary"
                          }`}
                        >
                          <p className="text-sm">{msg.content}</p>
                        </div>
                        <div className="text-xs opacity-50 mt-1">
                          {new Date(msg.timestamp).toLocaleTimeString()}
                          {isYou && msg.status && (
                            <span className="ml-2">✓ {msg.status}</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Input */}
                <div className="pt-3 border-t">
                  <div className="flex gap-2">
                    <input
                      className="input input-bordered w-full"
                      placeholder="Type a message..."
                    />
                    <button className="btn btn-primary">
                      Send
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <p className="text-center opacity-60 my-auto">
                Select a conversation
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
