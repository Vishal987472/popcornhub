import axios from "axios";

const API_BASE_URL = "http://localhost:3001/api/bookings";

export const createBooking = async (bookingData) => {
  const response = await axios.post(API_BASE_URL, bookingData);
  return response.data;
};

export const getBookings = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};
