import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import BookingPage from "./components/BookingPage";
import { useState, useReducer } from "react";

function App() {
  const updateTimes = (state, action) => {
    return state;
  }

  const initializeTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
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
