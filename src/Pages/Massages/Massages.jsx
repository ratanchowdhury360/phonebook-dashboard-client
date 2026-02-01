import React from "react";

const Massages = () => {
  return (
    <div className="min-h-screen bg-base-200 p-6">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-3xl font-bold">💬 Messages</h1>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search messages..."
            className="input input-bordered w-full max-w-xs"
          />
          <button className="btn btn-primary">New Message</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Conversation List */}
        <div className="card bg-base-100 shadow md:col-span-1">
          <div className="card-body p-4">
            <h2 className="font-semibold mb-3">Conversations</h2>

            <div className="space-y-2">
              <div className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-base-200">
                <div className="avatar placeholder">
                  <div className="bg-primary text-primary-content rounded-full w-10">
                    <span>JD</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm opacity-70 truncate">
                    Hey, are you free today?
                  </p>
                </div>
                <span className="text-xs opacity-60">2m</span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg cursor-pointer bg-base-200">
                <div className="avatar placeholder">
                  <div className="bg-secondary text-secondary-content rounded-full w-10">
                    <span>JS</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-medium">Jane Smith</p>
                  <p className="text-sm opacity-70 truncate">
                    Meeting confirmed                  </p>
                </div>
                <span className="badge badge-primary badge-sm">3</span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-base-200">
                <div className="avatar placeholder">
                  <div className="bg-accent text-accent-content rounded-full w-10">
                    <span>AJ</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-medium">Alex Johnson</p>
                  <p className="text-sm opacity-70 truncate">
                    Thanks!
                  </p>
                </div>
                <span className="text-xs opacity-60">Yesterday</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="card bg-base-100 shadow md:col-span-2 flex flex-col">
          <div className="card-body flex flex-col h-125">
            {/* Chat Header */}
            <div className="flex items-center gap-3  border-b pb-3 mb-3">
              <div className="avatar placeholder">
                <div className="bg-primary text-primary-content rounded-full w-10">
                  <span>JS</span>
                </div>
              </div>
              <div>
                <p className="font-semibold">Jane Smith</p>
                <p className="text-xs opacity-60">Online</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto space-y-3">
              <div className="chat chat-start">
                <div className="chat-bubble">
                  Hi! Did you check the report?
                </div>
              </div>

              <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-primary">
                  Yes, looks good to me 👍
                </div>
              </div>

              <div className="chat chat-start">
                <div className="chat-bubble">
                  Great! Let 's finalize it.
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div className="mt-4 flex gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="input input-bordered w-full"
              />
              <button className="btn btn-primary">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Massages;
