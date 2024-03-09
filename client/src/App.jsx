import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Passe from './pages/Passe'
import Present from './pages/Present'
import Avenir from './pages/Avenir'
import Footer from './components/Footer'

export default function App() {
  return (
    <BrowserRouter>
      {/* header */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/*         <Route path="/passe" element={<Passe />} />
        <Route path="/present" element={<Present />} />
        <Route path="/avenir" element={<Avenir />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
