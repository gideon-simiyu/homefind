import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Properties = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample properties data
  const properties = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      price: "$850,000",
      location: "Beverly Hills, CA",
      type: "house",
      beds: 4,
      baths: 3,
      area: "3,500 sq ft",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    },
    {
      id: 2,
      title: "Downtown Apartment",
      price: "$450,000",
      location: "Manhattan, NY",
      type: "apartment",
      beds: 2,
      baths: 2,
      area: "1,200 sq ft",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 3,
      title: "Seaside Condo",
      price: "$650,000",
      location: "Miami Beach, FL",
      type: "condo",
      beds: 3,
      baths: 2,
      area: "1,800 sq ft",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 4,
      title: "Downtown Apartment",
      price: "$450,000",
      location: "Manhattan, NY",
      type: "apartment",
      beds: 2,
      baths: 2,
      area: "1,200 sq ft",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 5,
      title: "Seaside Condo",
      price: "$650,000",
      location: "Miami Beach, FL",
      type: "condo",
      beds: 3,
      baths: 2,
      area: "1,800 sq ft",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 6,
      title: "Downtown Apartment",
      price: "$450,000",
      location: "Manhattan, NY",
      type: "apartment",
      beds: 2,
      baths: 2,
      area: "1,200 sq ft",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 7,
      title: "Seaside Condo",
      price: "$650,000",
      location: "Miami Beach, FL",
      type: "condo",
      beds: 3,
      baths: 2,
      area: "1,800 sq ft",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 8,
      title: "Downtown Apartment",
      price: "$450,000",
      location: "Manhattan, NY",
      type: "apartment",
      beds: 2,
      baths: 2,
      area: "1,200 sq ft",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 9,
      title: "Seaside Condo",
      price: "$650,000",
      location: "Miami Beach, FL",
      type: "condo",
      beds: 3,
      baths: 2,
      area: "1,800 sq ft",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  const filterButtons = [
    { id: 'all', label: 'All' },
    { id: 'house', label: 'Houses' },
    { id: 'apartment', label: 'Apartments' },
    { id: 'condo', label: 'Condos' },
  ];

  const filteredProperties = properties.filter(property => {
    const matchesFilter = selectedFilter === 'all' || property.type === selectedFilter;
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const PropertyCard = ({ property, index }) => {
    const [ref, inView] = useInView({
      threshold: 0.2,
      triggerOnce: true
    });

    const cardVariants = {
      hidden: {
        opacity: 0,
        y: 50
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut"
        }
      }
    };

    return (
      <motion.div
        ref={ref}
        variants={cardVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.2, ease: "easeOut" }
        }}
        className="bg-base-100 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
      >
        <div className="relative overflow-hidden group">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-6 py-2 rounded-full"
            >
              View Details
            </motion.button>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-primary mb-2">{property.title}</h3>
          <p className="text-base-content mb-2">{property.location}</p>
          <p className="text-lg font-bold text-primary mb-4">{property.price}</p>
          <div className="flex justify-between text-base-content">
            <span>{property.beds} beds</span>
            <span>{property.baths} baths</span>
            <span>{property.area}</span>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-base-200 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-primary mb-4">Discover Your Dream Property</h1>
          <p className="text-xl text-base-content">Browse through our carefully curated selection of properties</p>
        </motion.div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4 justify-center mb-8"
          >
            <input
              type="text"
              placeholder="Search properties..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input input-bordered w-full md:w-96"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {filterButtons.map((button) => (
              <motion.button
                key={button.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedFilter(button.id)}
                className={`px-6 py-2 rounded-full ${selectedFilter === button.id
                    ? 'bg-primary text-white'
                    : 'bg-base-100 text-base-content hover:bg-primary hover:text-white'
                  } transition-colors duration-300`}
              >
                {button.label}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Properties Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProperties.map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Properties;