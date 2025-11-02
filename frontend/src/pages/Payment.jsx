import React from "react";
import PaymentPage from "../components/PaymentPage";

const Payment = () => {
  return (
    <div
      style={{
        background: "radial-gradient(circle at top, #1a142a 0%, #0b081a 100%)",
        minHeight: "100vh",
      }}
    >
      <PaymentPage />
    </div>
  );
};

export default Payment;
