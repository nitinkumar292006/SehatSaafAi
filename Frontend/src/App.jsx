import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import Prescription from "./pages/Prescription"

export default function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/prescription" element={<Prescription />} />
      </Routes>

    </BrowserRouter>
  )
}