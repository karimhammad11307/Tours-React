import React from 'react'

function PaymentMethod({method , onSelect}) {

  return (
    <button onClick={() => onSelect(method)} className='w-full p-6 border-gray-200 rounded-xl hover:border-blue-500
    hover:bg-blue-50 transition-all duration-300 text-left flex items-center space-x-4 cursor-pointer'>
        <div className="text-4xl">{method.logo}</div>
        <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-800">{method.name}</h3>
            <p className='text-gray-600'>{method.description}</p>
        </div>
        <div className="text-2xl text-gray-400"> → </div>
    </button>
  )
}

export default PaymentMethod