import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Passe from './pages/Passe'
import Present from './pages/Present'
import Formation from './pages/Formation'
import Projet from './pages/Projet'
import Avenir from './pages/Avenir'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/passe" element={<Passe />} />
        <Route path="/present" element={<Present />} />
        <Route path="/formation" element={<Formation />} />
        <Route path="/projet/:id" element={<Projet />} />
        <Route path="/avenir" element={<Avenir />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
