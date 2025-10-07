function TourCard({tour,onSelect}){
    return(
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl 
        transition-all cursor-pointer transform hover:scale-105 duration-400"
        onClick={() => onSelect(tour)}>
            <img src={tour.image} alt="tour.name" 
            className="w-full h-48 object-cover"/>
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{tour.name}</h3>
                <p className="text-gray-600 mb-4">{tour.description}</p>
                <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">{tour.price} £E</span>
                    <span className="text-sm text-gray-500">{tour.duration}</span>
                </div>
                <div className="mt-4">
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                        🌟 {tour.rating}
                    </span>
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                        🌟 {tour.destination}
                    </span>

                </div>
            </div>
        </div>
    )
}
export default TourCard