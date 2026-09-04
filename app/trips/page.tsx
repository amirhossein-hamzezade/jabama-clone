import { AuthRequiredScreen } from "@/components/AuthRequiredScreen";
import React from "react";

const TripsPage = () => {
  return (
    <div className="absolute flex flex-col  items-center w-full h-full bg-white">
      <AuthRequiredScreen title="سفرهای من" />
    </div>
  );
};

export default TripsPage;
