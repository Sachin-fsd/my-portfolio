import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, GithubStats } from "./components";
import Footer from "./components/Footer";
import Aurora from "./blocks/Backgrounds/Aurora/Aurora";
import { LenisProvider, useGsapLenisSync } from "./context/LenisContext";

const App = () => {
  useGsapLenisSync();
  return (
    <BrowserRouter>
      <LenisProvider>
        <div className='relative z-0 bg-primary'>
          <div className='relative h-screen overflow-hidden'>
            {/* <div className="absolute inset-0 z-0"> */}
            <div className="absolute inset-0 z-10 w-full h-full">
              <Aurora
                colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                blend={0.5}
                amplitude={1.0}
                speed={0.5}
              />
            </div>
            {/* </div> */}
            <div className="relative z-10">
              <Navbar />
              <Hero />
            </div>
          </div>
          <About />
          <Experience />
          <GithubStats />
          <Tech />
          <Works />
          <Feedbacks />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
            <Footer />
          </div>
        </div>
      </LenisProvider>
    </BrowserRouter>
  );
}

export default App;