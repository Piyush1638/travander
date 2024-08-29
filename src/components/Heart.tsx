import Image from "next/image";
import React from "react";

const Heart = () => {
  return (
    <div className="flex items-center justify-center p-2 rounded-full bg-white w-fit">
      <Image src={"/card/Heart.svg"} alt="..." height={20} width={20} />
    </div>
  );
};

export default Heart;
