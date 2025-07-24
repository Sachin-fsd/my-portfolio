import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, GithubStats } from "./components";
import Footer from "./components/Footer";
import Particles from "./blocks/Backgrounds/Particles/Particles";
import { LenisProvider } from "./context/LenisContext";

const App = () => {
  return (
    <BrowserRouter>
      <LenisProvider>
        <div className='relative z-0 bg-primary'>
          <div className='relative h-screen overflow-hidden'>
            {/* <div className="absolute inset-0 z-0"> */}
            <div className="absolute inset-0 z-10 w-full h-full">
              <Particles
                particleColors={['#ffffff', '#915EFF', '#00e1ff']}
                particleCount={200}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
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