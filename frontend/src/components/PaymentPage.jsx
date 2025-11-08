import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { movie, selectedSeats, totalPrice, booking } = location.state || {};

  const [showModal, setShowModal] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);

  // ✅ Use environment variable for API base URL
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    if (!movie || !selectedSeats) {
      navigate("/browse");
    }
  }, [movie, selectedSeats, navigate]);

  // Load Razorpay SDK dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    // 🚧 Simulation if Razorpay key missing
    if (!import.meta.env.VITE_RAZORPAY_KEY_ID) {
      console.warn("⚠️ No Razorpay key found — running in simulation mode");
      setPaymentStatus("success");
      setShowModal(true);

      await axios.post(`${API_BASE_URL}/payments/verify`, {
        simulated: true,
        bookingId: booking?._id,
      });

      return;
    }

    try {
      // 1️⃣ Create order from backend
      const { data } = await axios.post(
        `${API_BASE_URL}/payments/create-order`,
        { amount: totalPrice }
      );

      // 2️⃣ Configure Razorpay options
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: data.currency,
        name: "PopcornHub",
        description: `Booking for ${movie.title}`,
        order_id: data.orderId,
        handler: async function (response) {
          setPaymentStatus("success");
          setShowModal(true);
          console.log("✅ Payment Success:", response);

          // Update booking payment status
          await axios.put(
            `${API_BASE_URL}/bookings/${booking._id}/status`,
            {
              paymentStatus: "Paid",
              transactionId: response.razorpay_payment_id,
            }
          );
        },
        prefill: {
          name: "Vishal",
          email: "vishal@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#ff4d6d",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

      rzp.on("payment.failed", async function (response) {
        setPaymentStatus("failure");
        setShowModal(true);
        console.error("❌ Payment Failed:", response);

        await axios.put(
          `${API_BASE_URL}/bookings/${booking._id}/status`,
          {
            paymentStatus: "Failed",
          }
        );
      });
    } catch (error) {
      console.error("Payment Error:", error);
      setPaymentStatus("failure");
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    navigate("/");
  };

  return (
    <div
      className="container-fluid py-5"
      style={{
        background: "radial-gradient(circle at top, #18152e 0%, #0c0a1e 100%)",
        minHeight: "100vh",
        color: "var(--text-light)",
      }}
    >
      <div
        className="container p-4 rounded shadow-lg"
        style={{
          maxWidth: "600px",
          backgroundColor: "#1b162e",
          border: "1px solid var(--accent-red)",
        }}
      >
        <h3
          className="text-center mb-4"
          style={{
            color: "var(--accent-yellow)",
            fontWeight: 700,
          }}
        >
          💳 Payment Summary
        </h3>

        <div className="mb-4 text-light">
          <p><strong>Movie:</strong> {movie?.title}</p>
          <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
          <p><strong>Seats:</strong> {selectedSeats?.join(", ")}</p>
          <p><strong>Price per Seat:</strong> ₹250</p>
          <hr style={{ borderColor: "var(--accent-yellow)" }} />
          <h5 className="text-end">
            Total:{" "}
            <span style={{ color: "var(--accent-yellow)" }}>
              ₹{totalPrice?.toLocaleString()}
            </span>
          </h5>
        </div>

        <div className="d-flex justify-content-center">
          <Button
            variant="success"
            className="fw-semibold px-4"
            style={{
              backgroundColor: "var(--accent-yellow)",
              border: "none",
              color: "#000",
            }}
            onClick={handlePayment}
          >
            Pay with Razorpay 🚀
          </Button>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {paymentStatus === "success"
              ? "Payment Successful 🎉"
              : "Payment Failed ❌"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {paymentStatus === "success" ? (
            <>
              <p>
                Your payment of{" "}
                <strong>₹{totalPrice?.toLocaleString()}</strong> for{" "}
                <b>{movie?.title}</b> was successful!
              </p>
              <p className="text-muted mb-0">
                A confirmation email will be sent shortly.
              </p>
            </>
          ) : (
            <p>
              Unfortunately, the payment could not be processed. Please try
              again later.
            </p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant={paymentStatus === "success" ? "success" : "danger"}
            onClick={closeModal}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PaymentPage;
