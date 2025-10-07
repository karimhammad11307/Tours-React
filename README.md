# Travista - Tourist Project

## Overview

Travista is a modern travel website built with React, Vite, and Tailwind CSS. Users can browse tours, view details, and go through a complete payment flow for booking their dream vacations.

## 🛠 What is Travista?

A comprehensive travel platform that allows users to:

- Browse and search for tours by destination, price, and duration
- View detailed tour information
- Complete bookings through an integrated payment gateway
- Experience a seamless, user-friendly interface

## Our Story

Once you open the website, you will land on the Home page where you can book your tour and easily access anything anywhere. You can search your destination, price and duration which would make your experience much easier. Once you decide to pay, you will be redirected to a payment gateway page with 3 different payment methods: **Visa**, **VF-Cash**, and **Cash**.

That's it!! Happy trip! 🌍

## Features

- **Website Branding & Identity** - Professional travel brand presence
- **Responsive UI Design** - Optimized for all devices
- **Advanced Search** - Filter tours by destination, price, and duration
- **Tour Packages** - Comprehensive service offerings
- **Projects/Tours Showcase** - Visual tour presentations
- **Image Gallery** - Stunning destination photography
- **Contact Section** - Easy communication channel
- **User Authentication System** - Secure user accounts
- **Payment Gateway** - Multiple payment options (Visa, VF-Cash, Cash)
- **Navigation Menu** - Intuitive site navigation
- **Informative Footer** - Branding and copyright information

## Technical Stack

- **React** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for styling and responsive design
- Fast Refresh enabled through [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)
- Alternative SWC-based Fast Refresh via [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc)

## Project Structure

```
src/
├── assets/              # Images and logo
├── components/          # Reusable components
│   ├── Navbar/         # Logo, links, search bar
│   ├── Footer/         # Branding and copyright
│   ├── TourCard/       # Tour information display
│   ├── SearchBar/      # Search input with emoji icon
│   ├── Header/
│   ├── Services/
│   ├── Gallery/
│   ├── Contact/
│   └── Auth/
├── pages/              # Main application pages
│   ├── Home/          # Shows tours listing
│   ├── About/         # Information page
│   ├── Contact/       # Contact page
│   ├── TourDetails/   # Selected tour information
│   └── Payment/       # Payment gateway page
├── App.jsx            # Main append logic
├── main.jsx           # Entry point
└── utils/
```

## Key Components

### Navbar

- Logo display
- Navigation links
- Integrated search bar

### Footer

- Branding elements
- Copyright information

### TourCard

- Displays tour information
- Shows pricing and ratings
- Quick booking access

### SearchBar

- Input field with emoji icon
- Real-time search functionality

## Pages

### Home

- Main landing page
- Displays available tours
- Featured destinations

### About / Contact

- Company information pages
- Contact details and forms

### TourDetails

- Comprehensive tour information
- Pricing and duration details
- Booking options

### Payment

- Payment gateway interface
- Multiple payment methods (Visa, VF-Cash, Cash)
- Currently static (upgradeable)

## Payment Flow

1. **Select a Tour** - Browse and choose your destination
2. **View Details** - Review tour information and pricing
3. **Click to Pay** - Proceed to payment gateway
4. **Complete Payment** - Choose payment method and confirm booking

_Note: Payment page is currently static and can be upgraded with real payment integration later._

## Styling

- **Tailwind CSS** for layout, colors, and styling
- **Responsive Design** using Flexbox and Grid
- Mobile-first approach
- Modern, clean interface

## Getting Started

### Prerequisites

- Node.js installed on your machine
- npm or yarn package manager

### Installation

1. Clone the repository

```bash
git clone [repository-url]
cd travista
```

2. Install dependencies:

```bash
npm install
```

3. Run development server:

```bash
npm run dev
```

4. Open your browser and navigate to the local development URL (typically `http://localhost:5173`)

## Featured Tours

### Our Popular Destinations

#### 🏝️ Tropical Paradise Gateway

**Location:** Bali  
**Duration:** 5 days  
**Rating:** 4.5/5 ⭐  
**Price:** 38,000 EGP

Experience the beautiful beaches and rich culture of Bali

---

#### 🏛️ European Adventure

Explore the city of love with our guided tour package

---

#### ⛰️ Mountain Trekking

Adventure through the breathtaking Swiss mountains

### What's Included in Our Tours

- ✅ Accommodation in 4-star hotels
- ✅ Professional tour guide
- ✅ All transportation during the tour
- ✅ Breakfast and some meals
- ✅ Entrance fees to attractions

## Next Steps & Future Enhancements

- [ ] Add real payment integration (Stripe, PayPal, etc.)
- [ ] Implement React Router for cleaner navigation
- [ ] Add user login and authentication system
- [ ] Create admin dashboard for tour management
- [ ] Integrate booking confirmation emails
- [ ] Add user reviews and ratings
- [ ] Implement booking history
- [ ] Add multilingual support

## Development Notes

- React Compiler is not enabled by default due to performance considerations
- For production applications, TypeScript integration is recommended
- ESLint configuration can be expanded using the [typescript-eslint](https://typescript-eslint.io) plugin

## Team

**Presented to you by:**

- Karim Hammad
- David Amir
- Youssef Mohamed
- Rehab Mohamed
- Fares Metwally

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting pull requests.

## License

[Add your license information here]

## Featured Tours

### Our Popular Destinations

<img src="./tours-project/src/assets/bali-beach.avif" alt="Tropical Paradise Getway" width="500"/>

**Tropical Paradise Getway**

- Location: Bali
- Duration: 5 days
- Rating: 4.5/5
- Price: 38000 EGP
- Experience beautiful beaches and rich culture of Bal

<img src="./tours-project/src/assets/european-city.avif" alt="Tropical Paradise Getway" width="500"/>

**European Adventure**
Explore the city of love with our guided tour package

<img src="./tours-project/src/assets/mountain-trek.jpg" alt="Tropical Paradise Getway" width="500"/>

**Mountain Trekking**
Adventure through the breathtaking Swiss mountains

### What's Included in Our Tours

Accommodation in 4-star hotels
Professional tour guide
All transportation during the tour
Breakfast and some meals
Entrance fees to attractions

---

**Happy traveling with Travista! ✈️🌴**
