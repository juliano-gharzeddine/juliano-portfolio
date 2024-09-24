import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { useEffect } from "react";
import axios from "axios";

const App = () => {

  useEffect(() => {
    const sendEmailForPrediction = async () => {
      try {
        // Make a POST request to the Flask API
        const response = await axios.post("/predict", {
          email: "Kindly attach the meeting minutes before end of shift", // The email content is sent as part of the body
        });

        // Set the response (prediction) to state
        console.log(response.data.prediction);
      } catch (error) {
        console.error("Error making the request:", error);
      }
    };

    sendEmailForPrediction()
  })

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
