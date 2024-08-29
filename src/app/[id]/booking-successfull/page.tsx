import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="bg-[url('/paymentsuccessfull/bookingsuccessfull.svg')] min-h-screen flex items-center justify-center">
      <h1 className="font-bold text-5xl leading-10">Payment Successfull</h1>
      <Image
        src={"/paymentsuccessfull/successfull.svg"}
        alt="..."
        height={56}
        width={56}
      />
    </main>
  );
};

export default page;
