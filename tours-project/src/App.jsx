import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import TourDetails from './pages/TourDetails'
import Payment from './pages/Payment'
import SignIn from './pages/SignIn'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('signin');
  const [selectedTour, setSelectedTour] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = () => {
    setIsAuthenticated(true);
    setCurrentPage('home');
  }

  const handleTourSelect = (tour) => {
    setSelectedTour(tour); 
    setCurrentPage('tour-details')
  }
  
  const handlePayment = () => {
    setCurrentPage('payment')
  }

  const renderPage = () => {
    if (!isAuthenticated) {
      return <SignIn onSignIn={handleSignIn} />
    }

    switch (currentPage) {
      case 'home':
        return <Home onTourSelect={handleTourSelect} />
      case 'about':
        return <About/>
      case 'contact':
        return <Contact/>
      case 'tour-details':
        return <TourDetails tour={selectedTour} onPayment={handlePayment} />
      case 'payment':
        return <Payment/>
      default: 
        return <Home onTourSelect={handleTourSelect} />
    }
  }

  return (
    <>
      <div className='min-h-screen bg-gray-50 w-full overflow-x-hidden'>
        {isAuthenticated && <Navbar currentPage={currentPage} onPageChange={setCurrentPage}/>}
        {renderPage()}
      </div>
    </>
  )
}

export default App