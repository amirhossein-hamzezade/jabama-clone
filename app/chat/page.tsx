import { AuthRequiredScreen } from "@/components/AuthRequiredScreen";
import React from "react";

const ChatPage = () => {
  return (
    <div className="absolute flex flex-col  items-center w-full h-full bg-white">
      <AuthRequiredScreen title="چت" />
    </div>
  );
};

export default ChatPage;
