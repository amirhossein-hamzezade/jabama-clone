import React from "react";

type AuthRequiredScreenProps = {
  title: string;
};

export const AuthRequiredScreen = ({ title }: AuthRequiredScreenProps) => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <header className="flex justify-center items-center py-4">
        <div className="flex justify-center items-center">
          <span className="text-xl font-bold ">{title}</span>
        </div>
      </header>
      <main className="w-full h-full flex flex-col  items-center">
        <div className="w-full h-full flex flex-col  items-center leading-7 px-4">
          <p className="w-full font-semibold text-xl mb-4 ">ورود یا ثبت‌نام</p>
          <p className="w-full mb-8 text-justify">
            برای تجربه بهتر در فرآیند رزرو اقامتگاه یا هتل در اپلیکیشن
            <strong> وارد شوید</strong> و یا <strong> ثبت‌نام </strong>
            کنید.
          </p>
          <div className="w-full flex justify-start">
            <button className="w-[235.78] bg-black text-white h-[48px] rounded-lg">
              ورورد/ثبت‌نام
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
