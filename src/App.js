import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Landing Page/Home';
import Detail from './pages/Detail Room/Detail';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Listing from './pages/Listing/Listing';



function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Login/" element={<Login />} />
      <Route path="/Register/" element={<Register />} />
      <Route path="/Listing/" element={<Listing />} />
      <Route path="/Detail/;id" element={<Detail />} />
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;