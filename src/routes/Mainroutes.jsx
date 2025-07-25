// App.jsx or Routes.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Gallery = lazy(() => import("./pages/Gallery"));

function Mainroutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="text-white text-center mt-20">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default Mainroutes;
