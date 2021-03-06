import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import DetailPage from "./pages/DetailPage/DetailPage";
import LandingPage from "./pages/Landing Page/LandingPage";
import Listing from "./pages/Listing/ListingPage";
import Profile from "./pages/Profile/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { PrivateRoute } from "./PrivateRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          <Route exact path="/" element={<PrivateRoute />}>
            <Route path="/Home" element={<LandingPage />} />
            <Route path="/Listing" element={<Listing />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Detail/:id" element={<DetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
