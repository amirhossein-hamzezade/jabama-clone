import { AuthRequiredScreen } from "@/components/AuthRequiredScreen";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="absolute flex flex-col  items-center w-full h-full bg-white">
      <AuthRequiredScreen title="ورود یا ثبت‌نام" />
    </div>
  );
};

export default ProfilePage;
