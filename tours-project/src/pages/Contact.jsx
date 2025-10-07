import React from 'react'

function Contact() {

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="tetx-4xl font-bold text-gray-800 mb-8 text-center">
          Contact Us!
        </h1>
        <div className="grid grid-cols-1 mf:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Get in Touch
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="text-2xl">📧</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">
                    info@travista.com
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-2xl">📞</div>
                <div>
                  <h3 className="font-semibold text-gray-600">Phone</h3>
                  <p className="text-gray-600">+20 123 4561 789</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-2xl">📍</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600">123 Kolayet el Banat Street, Cairo, Egypt</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-2xl">🕒</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Business Hours</h3>
                  <p className="text-gray-600">Sunday - Thursday: 9AM -6PM</p>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Send us a message!
            </h2>
            <form action="" className='space-y-4'>
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input type="text" className='w-full px-4 py-2 border border-gray-300 rounded-lg
                focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Your name..'/>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input type="email" className='w-full px-4 py-2 border border-gray-300 rounded-lg
                focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Your Email..'/>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea rows="4" className='w-full px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Your Message...'>
                </textarea>
              </div>
              <button className="w-full bg-white py-3 px-6 rounded-lg font-semibold
              hover:bg-blue-700 transition-colors ">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default Contact