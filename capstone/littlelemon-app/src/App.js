import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import BookingPage from "./components/BookingPage";
import { useState, useReducer, useEffect } from "react";
import { fetchAPI, submitAPI } from "./components/fetchdate";




function App() {
  const updateTimes = (state, action) => {
    
  }

  const initializeTimes = (day = new Date()) => {
    const availableTimes = fetchAPI(day);

    return availableTimes;
  }

  const [state, dispatch] = useReducer(updateTimes, initializeTimes);


  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/booking" element={<BookingPage availableTimes={state} dispatch={dispatch} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
