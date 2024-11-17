import React, { useState, useEffect } from 'react';
import { FaSearch, FaHome, FaMoneyBillWave, FaUserShield, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
    );
  };

  const featuredProperties = [
    {
      id: 1,
      title: 'Modern Apartment',
      location: 'Downtown',
      price: '$250,000',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400',
    },
    {
      id: 2,
      title: 'Family House',
      location: 'Suburbs',
      price: '$450,000',
      image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=400',
    },
    {
      id: 3,
      title: 'Luxury Villa',
      location: 'Beachfront',
      price: '$850,000',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=400',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="relative h-[80vh] overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={currentImageIndex}
            src={backgroundImages[currentImageIndex]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute top-0 left-0 w-full h-full object-cover"
            alt="Property"
          />
        </AnimatePresence>

        {/* Carousel Navigation Buttons */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all"
          aria-label="Previous image"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all"
          aria-label="Next image"
        >
          <FaChevronRight size={24} />
        </button>

        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <div className="mx-auto bg-black p-5 rounded backdrop-blur bg-opacity-50">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-white text-center mb-6"
            >
              Find Your Perfect Home
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white text-center mb-8"
            >
              Discover the best properties in your area
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="w-full max-w-2xl"
            >
              <div className="relative max-w-xl mx-auto">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by location, property type, or price range..."
                  className="w-full px-6 py-4 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-primary ring-primary border border-primary"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white p-4 rounded-full hover:bg-primary/50 transition">
                  <FaSearch />
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${currentImageIndex === index ? 'bg-white w-4' : 'bg-white/50'
                }`}
            />
          ))}
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 px-4 bg-base-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <motion.div
                key={property.id}
                whileHover={{ scale: 1.03 }}
                className="bg-base-100 rounded-lg overflow-hidden shadow-lg"
              >
                <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                  <p className="text-gray-600 mb-2">{property.location}</p>
                  <p className="text-blue-600 font-bold">{property.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="text-center p-6"
            >
              <div className="text-4xl text-blue-600 mb-4 flex justify-center">
                <FaHome />
              </div>
              <h3 className="text-xl font-semibold mb-3">Wide Selection</h3>
              <p className="text-gray-600">Browse through thousands of properties that match your criteria</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="text-center p-6"
            >
              <div className="text-4xl text-blue-600 mb-4 flex justify-center">
                <FaMoneyBillWave />
              </div>
              <h3 className="text-xl font-semibold mb-3">Best Prices</h3>
              <p className="text-gray-600">Find the best deals and competitive prices in the market</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="text-center p-6"
            >
              <div className="text-4xl text-blue-600 mb-4 flex justify-center">
                <FaUserShield />
              </div>
              <h3 className="text-xl font-semibold mb-3">Trusted Agents</h3>
              <p className="text-gray-600">Work with verified and professional real estate agents</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-base-200">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Dream Home?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied customers who found their perfect property with us</p>
          <button className="btn btn-primary btn-wide rounded-full font-semibold">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;