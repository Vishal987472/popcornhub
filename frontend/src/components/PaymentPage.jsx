import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const PaymentPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);

  // Simulated booking data (replace with props or context later)
  const bookingSummary = {
    movie: "Inception",
    date: "2025-11-05",
    time: "7:30 PM",
    seats: ["B2", "B3", "B4"],
    pricePerSeat: 250,
  };

  const totalAmount = bookingSummary.seats.length * bookingSummary.pricePerSeat;

  const handlePayment = (status) => {
    setPaymentStatus(status);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setPaymentStatus(null);
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

        {/* Booking Info */}
        <div className="mb-4">
          <p>
            <strong>Movie:</strong> {bookingSummary.movie}
          </p>
          <p>
            <strong>Date:</strong> {bookingSummary.date}
          </p>
          <p>
            <strong>Showtime:</strong> {bookingSummary.time}
          </p>
          <p>
            <strong>Seats:</strong> {bookingSummary.seats.join(", ")}
          </p>
          <p>
            <strong>Price per Seat:</strong> ₹{bookingSummary.pricePerSeat}
          </p>
          <hr style={{ borderColor: "var(--accent-yellow)" }} />
          <h5 className="text-end">
            Total:{" "}
            <span style={{ color: "var(--accent-yellow)" }}>
              ₹{totalAmount}
            </span>
          </h5>
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-center gap-3">
          <Button
            variant="success"
            className="fw-semibold px-4"
            style={{
              backgroundColor: "var(--accent-yellow)",
              border: "none",
              color: "#000",
            }}
            onClick={() => handlePayment("success")}
          >
            Proceed to Pay ✅
          </Button>
          <Button
            variant="danger"
            className="fw-semibold px-4"
            style={{
              backgroundColor: "var(--accent-red)",
              border: "none",
            }}
            onClick={() => handlePayment("failure")}
          >
            Simulate Fail ❌
          </Button>
        </div>
      </div>

      {/* Payment Result Modal */}
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
                <strong>₹{totalAmount}</strong> for{" "}
                <b>{bookingSummary.movie}</b> was successful!
              </p>
              <p className="text-muted mb-0">
                A confirmation email will be sent shortly.
              </p>
            </>
          ) : (
            <>
              <p>
                Unfortunately, the payment could not be processed. Please try
                again later.
              </p>
            </>
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
