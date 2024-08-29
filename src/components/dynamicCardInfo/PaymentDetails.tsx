import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

const PaymentDetails = ({
  id,
  perPersonPrice,
  totalPersons,
}: {
  id: string;
  perPersonPrice: number;
  totalPersons: number;
}) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    string | null
  >(null);
  const router = useRouter();
  const pathName = usePathname();

  const customerDetails = {
    name: "John Doe",
    age: 29,
    email: "johndoe@example.com",
    contactNumber: "+91 1234567890",
  };

  const totalPrice = totalPersons * perPersonPrice;

  const handlePaymentMethodChange = (method: string) => {
    setSelectedPaymentMethod((prevMethod) =>
      prevMethod === method ? null : method
    );
  };

  const handleBookNow = () => {
    if (selectedPaymentMethod) {
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const confirmBooking = () => {
    router.push(`/${id}/booking-successful`);
  };

  return (
    <div className="bg-white p-4 xl:w-4/5 w-full mx-auto shadow-lg shadow-[#10182814] py-6 rounded-xl">
      <h3 className="text-lg font-semibold leading-6 mb-4">Payment Details</h3>

      <div className="flex flex-col gap-2">
        <PaymentDetailItem
          label="Trip price per person"
          value={perPersonPrice}
        />
        <PaymentDetailItem
          label="Total person in booking"
          value={totalPersons}
        />
        <PaymentDetailItem label="Total Discount" value={0} />
        <PaymentDetailItem label="Total price" value={totalPrice} />
      </div>

      <div className="flex flex-col gap-3 mt-6">
        <h3 className="text-lg font-semibold leading-6">Payment Via</h3>
        {["razorpay", "phonepe"].map((method, index) => (
          <div key={index} className="flex items-center mt-2">
            <input
              type="checkbox"
              id={method}
              checked={selectedPaymentMethod === method}
              onChange={() => handlePaymentMethodChange(method)}
              className="mr-2"
            />
            <Image
              src={`/details/${method}.svg`}
              alt={`${method} logo`}
              height={24}
              width={69}
            />
          </div>
        ))}
      </div>

      <div className="w-full text-[#27272A] font-semibold leading-6 border-t border-[#E7E6E6] py-2 flex items-center justify-between pr-8 mt-6">
        Grand Total: <span>₹{totalPrice}</span>
      </div>

      <div className="mt-6">
        <button
          className={`px-16 py-4 font-semibold leading-6 w-fit rounded-full bg-[#0077CC] text-white ${
            !selectedPaymentMethod && " cursor-not-allowed"
          }`}
          onClick={handleBookNow}
          disabled={!selectedPaymentMethod}
        >
          Book Now
        </button>
        <p className="text-xs leading-6 text-[#3F3F46] mt-2 text-start">
          By Clicking on Book Now you confirm that all the details provided by
          you are correct, and accepting our TnC & Cancellation Policy.
        </p>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 max-w-md">
            <h2 className="text-xl font-semibold mb-4">Booking Confirmation</h2>
            <p className="mb-2">Name: {customerDetails.name}</p>
            <p className="mb-2">Age: {customerDetails.age}</p>
            <p className="mb-2">Email: {customerDetails.email}</p>
            <p className="mb-4">
              Contact Number: {customerDetails.contactNumber}
            </p>
            <h3 className="text-lg font-semibold mb-2">Pricing Details</h3>
            <PaymentDetailItem
              label="Trip price per person"
              value={perPersonPrice}
            />
            <PaymentDetailItem
              label="Total persons in booking"
              value={totalPersons}
            />
            <PaymentDetailItem label="Total Discount" value={0} />
            <PaymentDetailItem label="Total price" value={totalPrice} />
            <div className="flex items-center gap-3 justify-end mt-4">
              <button
                className="px-6 py-2 border border-gray-700 font-semibold rounded-full"
                onClick={closeModal}
              >
                Close
              </button>
              <button
                className="px-6 py-2 bg-[#0077CC] text-white font-semibold rounded-full"
                onClick={confirmBooking}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentDetails;

const PaymentDetailItem = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => (
  <p className="text-xs text-[#27272A] flex items-center justify-between w-4/5">
    {label}: <span>₹{value}</span>
  </p>
);
