import React, { useState } from "react";
import useFetch from "../hooks/useFetch";

const Messages = () => {
  const { data, loading } = useFetch("/mock.json");
  const [activeChat, setActiveChat] = useState(null);

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="min-h-screen bg-base-200 p-6 grid md:grid-cols-3 gap-6">
      <div className="card bg-base-100 shadow">
        <div className="card-body">
          {data.messages.map((m) => (
            <div
              key={m.id}
              onClick={() => setActiveChat(m)}
              className="p-3 rounded cursor-pointer hover:bg-base-200"
            >
              <p className="font-semibold">{m.name}</p>
              <p className="text-sm opacity-70">{m.lastMessage}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card bg-base-100 shadow md:col-span-2">
        <div className="card-body">
          {activeChat ? (
            <>
              <h2 className="text-xl font-bold mb-4">{activeChat.name}</h2>
              <input
                className="input input-bordered w-full"
                placeholder="Type a message..."
              />
            </>
          ) : (
            <p>Select a conversation</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;
