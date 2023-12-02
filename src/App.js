// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Complete from './myComponets/Complete';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Complete />}>
      </Route>
      {/* <Route path="/About" element={<About />}>
      </Route>
      <Route path="/MyResume" element={<MyResume />}>
      </Route>
      <Route path="/Portfolio" element={<Portfolio />}>
      </Route>
      <Route path="/Contact" element={<Contact />}>
      </Route> */}
    </Routes>
  </Router>
  )
}

export default App;
