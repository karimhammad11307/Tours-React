import TourCard from "../components/TourCard";
import Footer from "../components/Footer";
import landingImage from "../assets/landing-image.jpg";

const tours = [
  {
    id:1 ,
    name: "Tropical Paradise Getway",
    destination:"Bali",
    description: "Experience beautfiful beaches and rich culture of Bali",
    price: 38000,
    duration: "5 days",
    rating: "4.5/5",
    image: "https://plus.unsplash.com/premium_photo-1669748157617-a3a83cc8ea23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJvcGljYWx8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 2,
    name: "European Adventure",
    destination: "Paris, France",
    description: "Explore the city of love with our guided tour package",
    price: 72000,
    duration: "5 days",
    rating: "4.9/5",
    image: "https://images.unsplash.com/photo-1473951574080-01fe45ec8643?q=80&w=1204&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    name: "Mountain Trekking",
    destination: "Swiss Alps",
    description: "Adventure through the breathtaking Swiss mountains",
    price: 69000,
    duration: "4 days",
    rating: "4.7/5",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400"
  },
  {
    id: 4,
    name: "Desert Safari",
    destination: "Dubai, UAE",
    description: "Thrilling desert adventure with traditional experiences",
    price: 48000,
    duration: "3 days",
    rating: "4.6/5",
    image: "https://plus.unsplash.com/premium_photo-1661962542692-4fe7a4ad6b54?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 5,
    name: "Cultural Heritage Tour",
    destination: "Kyoto, Japan",
    description: "Discover ancient temples and traditional Japanese culture",
    price: 35000,
    duration: "6 days",
    rating: "4.9/5",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400"
  },
  {
    id: 6,
    name: "Island Hopping",
    destination: "Greek Islands",
    description: "Sail through the beautiful Greek archipelago",
    price: 37000,
    duration: "5 days",
    rating: "4.8/5",
    image: "https://images.unsplash.com/photo-1565588514814-6a9e7bcd7657?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZWslMjBpc2xhbmR8ZW58MHx8MHx8fDA%3D0"
  }
]

function Home({ onTourSelect }) {
 const scrollToTours = () => {
   const toursSection = document.getElementById('tours-section');
   toursSection?.scrollIntoView({ behavior: 'smooth' });
 };

 return(
  <>
    {/* Hero/Landing Section */}
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={landingImage} 
          alt="Travel destination" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 drop-shadow-2xl animate-fade-in">
          Your Journey Begins Here
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-12 font-light tracking-wide drop-shadow-lg">
          Explore breathtaking destinations and create unforgettable memories
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={scrollToTours}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl">
            Explore Tours
          </button>
          <button className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-lg text-lg border-2 border-white transition-all duration-300 transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>

    <div id="tours-section" className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Discover Amazing Tours with us
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore the world with our carefully curated tour packages.
          From tropical beaches to mountain hikes, we have something for everyone
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map(tour => (
          <TourCard key={tour.id}
          tour={tour}
          onSelect={onTourSelect}/>
        ))}

      </div>
      
    </div>
    <Footer></Footer>
  </>
    

 )
}

export default Home;