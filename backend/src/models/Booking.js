import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    movieId: {
      type: mongoose.Schema.Types.Mixed, // 👈 allow both ObjectId or string/number
      ref: "Movie",
      required: true,
    },
    userName: { type: String, required: true },
    seats: [{ type: String, required: true }],
    totalAmount: { type: Number, required: true },
    paymentStatus: {
      type: String,
      enum: ["Pending", "Paid", "Failed"],
      default: "Pending",
    },
    transactionId: { type: String },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
