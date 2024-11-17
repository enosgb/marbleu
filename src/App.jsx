import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/home";
import Navbar from "./navbar/navbar";

function App() {
  return (
    <>
      <div className="relative w-screen h-screen ">
        <video
          src="https://videos.pexels.com/video-files/8307053/8307053-hd_1920_1080_25fps.mp4"
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover opacity-45"
        />
        <div className="relative z-20">
          <Navbar />
        </div>
        <div className="relative z-10 flex justify-center  ">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
