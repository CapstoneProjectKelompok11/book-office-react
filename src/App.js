import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Landing Page/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import DetailPage from "./pages/DetailPage";
import LandingPage from "./pages/LandingPage";
import Listing from "./pages/ListingPage";
import Profile from "./pages/Profile";



function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Login/" element={<Login />} />
      <Route path="/Register/" element={<Register />} />
      <Route path="/listing" element={<Listing />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/detail/:id" element={<DetailPage />}></Route>
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;