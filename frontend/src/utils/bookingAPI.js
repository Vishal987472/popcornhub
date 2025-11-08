import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const createBooking = async (bookingData) => {
  const response = await axios.post(`${BASE_URL}/bookings`, bookingData);
  return response.data;
};

export const getBookings = async () => {
  const response = await axios.get(`${BASE_URL}/bookings`);
  return response.data;
};
