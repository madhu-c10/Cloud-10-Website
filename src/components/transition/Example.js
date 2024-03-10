import { BrowserRouter as Router,Routes, Route
} from "react-router-dom";
import "./style.css";
import Home from "../home/Home";
import About from "../about/About";
import Contact from "../contact/Contact";
import Nav from "../navigation/Nav";


export const Example = () => {
  return (
    <Router>
      <Nav/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
};