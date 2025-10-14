import React from 'react'
import TourCard from '../components/TourCard'
function TourDetails({tour,onPayment}) 
{
  if(!tour){
    return(
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className='text-2xl font-bold text-gray-800'>No tour selected</h2>
      </div>
    )
  }
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='max-w-4xl mx-auto'>
        {/* Back button */}
        <button onClick={() => window.history.back()} className='mb-6 text-blue-600
        hover:text-blue-800 flex items-center'>
          Back to Tours
        </button>
        <img src={tour.image} alt={tour.name} className='w-full h-96
        object-cover rounded-xl shadow-lg mb-8'/>
        {/* Tour details */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text w-4xl font-bold text-gray-800 mb-4">{tour.name}</h1> 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className='text-lg font-semibold text-gray-700 mb-2'>Destination</h3>
              <p className='text-gray-600'>{tour.destination}</p>
            </div>
            <div>
              <h3 className='text-lg font-semibold text-gray-700 mb-2'>Duration</h3>
              <p className='text-gray-600'>{tour.duration}</p>
            </div>
            <div>
              <h3 className='text-lg font-semibold text-gray-700 mb-2'>Rating</h3>
              <p className='text-gray-600'>{tour.rating}</p>
            </div>
            <div>
              <h3 className='text-lg font-semibold text-gray-700 mb-2'>Price</h3>
              <p className='text-gray-600'>{tour.price}</p>
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">About this tour</h3>
            <p className="text-gray-600 leading-relaxed">{tour.description}</p>
          </div>
          <div className="mb-8">
             <h3 className="text-xl font-semibold text-gray-800 mb-3">What's Included</h3>
            <ul className="text-gray-600 space-y-2">
              <li>✅ Accommodation in 4-star hotels</li>
              <li>✅ Professional tour guide</li>
              <li>✅ All transportation during the tour</li>
              <li>✅ Breakfast and some meals</li>
              <li>✅ Entrance fees to attractions</li>
            </ul>
          </div>
          <button onClick={onPayment}
           className="w-full bg-blue-600 hover:cursor-pointer text-white py-4 px-6 rounded-lg text-xl font-semibold
           hover:bg-blue-700 transition-colors shadow-lg">
            Book Now! - {tour.price} £E
           </button>
        </div>
      </div>
    </div>
  )
}

export default TourDetails