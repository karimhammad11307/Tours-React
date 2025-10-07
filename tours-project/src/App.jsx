import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import TourDetails from './pages/TourDetails'
import Payment from './pages/Payment'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedTour , setSelectedTour] = useState(null);

  const handleTourSelect = (tour) => {
     setSelectedTour(tour); 
    setCurrentPage('tour-details')
  }
  
  const handlePayment = () => {
    setCurrentPage('payment')
  }
  const renderPage = () =>{
    switch (currentPage) {
      case 'home' :
        return <Home onTourSelect ={handleTourSelect} />
      case 'about' :
        return <About/>
      case 'contact' :
        return <Contact/>
      case 'tour-details' :
        return <TourDetails tour ={selectedTour} onPayment = {handlePayment} />
      case 'payment' :
        return <Payment/>
      default: 
        return <Home onTourSelect={handleTourSelect} />
    }
  }

  return (
    <>
      <div className=' min-h-screen bg-gray-50 w-full overflow-x-hidden'>
        <Navbar currentPage = {currentPage} onPageChange = {setCurrentPage}/>
        {renderPage()}
      </div>
    </>
  )
}

export default App
