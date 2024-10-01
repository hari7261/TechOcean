import React from "react";

function PrototypeImg() {
  return (
    <div className="flex-col justify-center items-center mx-auto relative hidden lg:block">
      <img
        alt=""
        className="absolute inset-0 z-0 bg-transparent"
        src="/linear-bg.svg"
      />
      <img
        alt=""
        className="max-w-[1000px] z-10 relative mt-20 top-[200px]"
        src="/linear-bgg.svg"
      />
    </div>
  );
}

export default PrototypeImg;
