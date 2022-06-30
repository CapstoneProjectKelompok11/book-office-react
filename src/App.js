import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import DetailPage from "./pages/DetailPage/DetailPage";
import LandingPage from "./pages/Landing Page/LandingPage";
import Listing from "./pages/Listing/ListingPage";
import Profile from "./pages/Profile/Profile";



function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/Login/" element={<Login />} />
      <Route path="/Register/" element={<Register />} />
      <Route path="/Listing" element={<Listing />}/>
      <Route path="/Profile" element={<Profile />}/>
      <Route path="/Detail/:id" element={<DetailPage />}/>
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;