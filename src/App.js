import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Feed from "./Feed";
import Blog from "./Blog";
import About from "./About";
import Topics from "./Topics";
import Soccer from "./Soccer";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route path="/Topics" element={<Topics />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/About" element={<About />} />
        <Route path="/Topics/Soccer" element={<Soccer />} />
      </Routes>
    </Router>
  );
}

export default App;
