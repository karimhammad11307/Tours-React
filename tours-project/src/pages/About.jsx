import React from 'react'

function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className='font-bold text-gray-800 mb-8 text-center text-4xl'>
          About Travista
        </h1>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="prose max-w-none">
            <p className='text-lg text-gray-600 mb-6'>
              Welcome to TourVista, your premier partner in creating unforgettable travel experiences. 
              Since our founding, we've been dedicated to providing exceptional tour packages that 
              combine adventure, comfort, and cultural immersion.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Missions</h2>
            <p className="text-gray-600 mb-6">
              To make world-class travel accessible to everyone while promoting sustainable 
              tourism practices and supporting local communities.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Why choose us?
            </h2>
            <ul className="text-gray-600 space-y-3 mb-6">
              <li>✅ Over 10,000 satisfied customers worldwide</li>
              <li>✅ 24/7 customer support during your travels</li>
              <li>✅ Local expert guides in every destination</li>
              <li>✅ Best price guarantee</li>
              <li>✅ Flexible cancellation policies</li>
            </ul>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="tetxt-xl font-semibold text-blue-800 mb-3">
                Get in Touch
              </h3>
              <p className="tetx-blue-700">
                Ready to start your adventure? Contact us today and let's create your dream vacation!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About