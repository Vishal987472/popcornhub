import Booking from "../models/Booking.js";
import Movie from "../models/Movie.js";

/**
 * @desc Create a new booking
 * @route POST /api/bookings
 */
export const createBooking = async (req, res) => {
  try {
    const { movieId, userName, seats, totalAmount } = req.body;

    if (!movieId || !seats?.length) {
      return res.status(400).json({ message: "Movie and seats are required." });
    }

    // Fetch movie details
    const movie = await Movie.findById(movieId);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found." });
    }

    // Seat locking simulation
    const bookedSeats = await Booking.find({ movieId }).select("seats -_id");
    const alreadyBooked = bookedSeats.flatMap(b => b.seats);

    const overlap = seats.filter(seat => alreadyBooked.includes(seat));
    if (overlap.length > 0) {
      return res.status(400).json({
        message: `Seats already booked: ${overlap.join(", ")}`,
      });
    }

    const newBooking = new Booking({
      movieId,
      userName: userName || "Guest",
      seats,
      totalAmount,
      paymentStatus: "Pending",
    });

    await newBooking.save();

    res.status(201).json({
      message: "Booking created successfully.",
      booking: newBooking,
    });
  } catch (error) {
    console.error("❌ Error creating booking:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

/**
 * @desc Get all bookings (Admin view)
 * @route GET /api/bookings
 */
export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("movieId", "title genre duration");
    res.status(200).json(bookings);
  } catch (error) {
    console.error("❌ Error fetching bookings:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

/**
 * @desc Update payment status (after payment simulation)
 * @route PATCH /api/bookings/:id/payment
 */
export const updatePaymentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, transactionId } = req.body;

    const booking = await Booking.findById(id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found." });
    }

    booking.paymentStatus = status;
    booking.transactionId = transactionId || "TEST_TXN_" + Date.now();

    await booking.save();

    res.status(200).json({
      message: "Payment status updated.",
      booking,
    });
  } catch (error) {
    console.error("❌ Error updating payment:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
