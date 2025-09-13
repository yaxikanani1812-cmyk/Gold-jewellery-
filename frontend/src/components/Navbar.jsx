import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <Helmet>
        <title>Luxury Jewelry Store - Premium Gold & Diamond Collection</title>
        <meta name="description" content="Discover our exquisite collection of gold jewelry, diamond rings, necklaces, earrings, and mangalsutras. Premium quality with timeless designs." />
        <meta name="keywords" content="jewelry, gold jewelry, diamond rings, necklaces, earrings, mangalsutra, luxury jewelry" />
      </Helmet>
      
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container-custom">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-jewelry rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">J</span>
              </div>
              <span className="text-2xl font-serif font-bold text-gray-800">
                Jewelry Store
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`font-medium transition-colors duration-300 ${
                  isActive('/') ? 'text-jewelry-primary' : 'text-gray-700 hover:text-jewelry-primary'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`font-medium transition-colors duration-300 ${
                  isActive('/about') ? 'text-jewelry-primary' : 'text-gray-700 hover:text-jewelry-primary'
                }`}
              >
                About
              </Link>
              <Link
                to="/products"
                className={`font-medium transition-colors duration-300 ${
                  isActive('/products') ? 'text-jewelry-primary' : 'text-gray-700 hover:text-jewelry-primary'
                }`}
              >
                Products
              </Link>
              <Link
                to="/contact"
                className={`font-medium transition-colors duration-300 ${
                  isActive('/contact') ? 'text-jewelry-primary' : 'text-gray-700 hover:text-jewelry-primary'
                }`}
              >
                Contact
              </Link>
              <Link
                to="/admin"
                className="btn-primary text-sm py-2 px-4"
              >
                Admin
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <Link
                  to="/"
                  className={`font-medium transition-colors duration-300 ${
                    isActive('/') ? 'text-jewelry-primary' : 'text-gray-700 hover:text-jewelry-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={`font-medium transition-colors duration-300 ${
                    isActive('/about') ? 'text-jewelry-primary' : 'text-gray-700 hover:text-jewelry-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/products"
                  className={`font-medium transition-colors duration-300 ${
                    isActive('/products') ? 'text-jewelry-primary' : 'text-gray-700 hover:text-jewelry-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Products
                </Link>
                <Link
                  to="/contact"
                  className={`font-medium transition-colors duration-300 ${
                    isActive('/contact') ? 'text-jewelry-primary' : 'text-gray-700 hover:text-jewelry-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  to="/admin"
                  className="btn-primary text-sm py-2 px-4 w-fit"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Admin
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
