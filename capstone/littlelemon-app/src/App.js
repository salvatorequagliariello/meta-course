import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import BookingPage from "./components/BookingPage";
import { useState, useReducer, useEffect } from "react";
import { fetchAPI, submitAPI } from "./components/fetchdate";
import ConfirmedBooking from "./components/ConfirmedBooking";


const availableTimes = fetchAPI(new Date());
const updateTimes = (state, action) => {
  if (action.type == "submit-date") {
    return fetchAPI(action.date);
  };
};

function App() {
  const [state, dispatch] = useReducer(updateTimes, availableTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    if(submitAPI(formData)) {
      navigate("/confirmedbooking")
    }
  }
  
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/booking" element={<BookingPage availableTimes={state} dispatch={dispatch} submitForm={submitForm} />} />
        <Route path="/confirmedbooking" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
