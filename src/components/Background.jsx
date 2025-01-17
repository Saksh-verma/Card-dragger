import React from "react";

const Background = () => {
  return (
    <>
      <div className="w-full h-screen fixed z-[2]">
        <div className="absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 font-semibold text-xl">
          Documents
        </div>
        <h1 className="absolute top-1/2 left-1/2 text-[16vw] -translate-x-[50%] -translate-y-[50%] leading-none tracking-tighter font-semibold text-zinc-900">
          Docs.
        </h1>
      </div>
    </>
  );
};

export default Background;
