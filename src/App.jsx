import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Missing from "./components/Missing";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/furniture-web/" element={<Home />} />
        <Route path="/furniture-web/about" element={<About />} />
        <Route path="/furniture-web/contact" element={<Contact />} />
        <Route path="/furniture-web/products" element={<Products />} />
        <Route path="/furniture-web/*" element={<Missing />} />
      </Routes>
    </>
  );
};

export default App;
