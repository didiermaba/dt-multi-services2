import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/notFound/NotFound";
import About from "./pages/about/About";
import { AnimatePresence } from "framer-motion";


function App() {
  return (
    <div>
      <BrowserRouter>
         <AnimatePresence >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apropos" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
