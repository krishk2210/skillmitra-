import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Pricing from './pages/Pricing'
import Courses from './pages/Courses'
import LearningHub from './pages/LearningHub'
import NotFound from './pages/NotFound'

// Pages that should NOT show the main Navbar/Footer
const TRANSACTIONAL_ROUTES = ['/login', '/signup']

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F7F3]">
      <Navbar />
      <main className="flex-1 pt-[72px]">
        {children}
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Transactional pages – no navbar/footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Main pages with navbar/footer */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/pricing" element={<Layout><Pricing /></Layout>} />
        <Route path="/courses" element={<Layout><Courses /></Layout>} />
        <Route path="/dashboard" element={<Layout><LearningHub /></Layout>} />
        <Route path="*" element={<Layout><NotFound /></Layout>} />
      </Routes>
    </Router>
  )
}

export default App
