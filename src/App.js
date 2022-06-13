import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home'
import Detail from './Pages/Detail'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Lisitng from './pages/Listing'



function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Login/" element={<Login />} />
      <Route path="/Detail/:id" element={<Detail />} />
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;