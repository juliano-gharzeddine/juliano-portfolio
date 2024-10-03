import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import SpamDetection from "./components/SpamDetection"; 

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary min-h-screen">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>
        <Routes>
          {/* Define the main route for the landing page */}
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Experience />
              <Tech />
              <Works />
              <Feedbacks />
              <div className="relative z-0">
                <Contact />
                <StarsCanvas />
              </div>
            </>
          } />

          {/* Define the new route for Spam Detection */}
          <Route path="/spam-detection" element={<SpamDetection />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
