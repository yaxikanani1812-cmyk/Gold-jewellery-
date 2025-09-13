import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useProducts } from '../context/ProductContext';

const Home = () => {
  const { getProductsByCategory } = useProducts();

  const categories = [
    {
      name: 'Rings',
      slug: 'rings',
      description: 'Exquisite rings for every occasion',
      image: '/img/ring/1.jpg',
      count: getProductsByCategory('rings').length
    },
    {
      name: 'Necklaces',
      slug: 'necklaces',
      description: 'Elegant necklaces and pendants',
      image: '/img/necklace/1.jpg',
      count: getProductsByCategory('necklaces').length
    },
    {
      name: 'Earrings',
      slug: 'earrings',
      description: 'Beautiful earrings for all styles',
      image: '/img/Earrings/1.jpg',
      count: getProductsByCategory('earrings').length
    },
    {
      name: 'Mangalsutras',
      slug: 'mangalsutras',
      description: 'Traditional mangalsutras',
      image: '/img/Mangalsutra/1.jpg',
      count: getProductsByCategory('mangalsutras').length
    }
  ];

  return (
    <>
      <Helmet>
        <title>Luxury Jewelry Store - Premium Gold & Diamond Collection</title>
        <meta name="description" content="Discover our exquisite collection of gold jewelry, diamond rings, necklaces, earrings, and mangalsutras. Premium quality with timeless designs." />
        <meta name="keywords" content="jewelry, gold jewelry, diamond rings, necklaces, earrings, mangalsutra, luxury jewelry" />
        <meta property="og:title" content="Luxury Jewelry Store - Premium Gold & Diamond Collection" />
        <meta property="og:description" content="Discover our exquisite collection of gold jewelry, diamond rings, necklaces, earrings, and mangalsutras." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/img/necklace/1.jpg" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/img/necklace/4.jpg')",
            filter: 'brightness(0.7)'
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in">
            Timeless Elegance
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-up">
            Discover our exquisite collection of premium jewelry crafted with love and precision
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="btn-primary text-lg px-8 py-4">
              Shop Collection
            </Link>
            <Link to="/about" className="btn-secondary text-lg px-8 py-4">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
              Our Collections
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our carefully curated selection of premium jewelry pieces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Link
                key={category.slug}
                to={`/products?category=${category.slug}`}
                className="group card overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-2xl font-serif font-bold mb-2">
                        {category.name}
                      </h3>
                      <p className="text-sm opacity-90 mb-2">
                        {category.description}
                      </p>
                      <span className="inline-block bg-jewelry-primary text-white px-3 py-1 rounded-full text-sm">
                        {category.count} Items
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600">
              We are committed to providing the finest jewelry experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-jewelry-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-4">Premium Quality</h3>
              <p className="text-gray-600">
                Every piece is crafted with the finest materials and attention to detail
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-jewelry-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-4">Authentic Certification</h3>
              <p className="text-gray-600">
                All our jewelry comes with proper certification and authenticity guarantee
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-jewelry-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-4">Expert Craftsmanship</h3>
              <p className="text-gray-600">
                Skilled artisans create each piece with traditional techniques and modern innovation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-jewelry text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Find Your Perfect Piece?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Browse our complete collection and discover jewelry that tells your story
          </p>
          <Link to="/products" className="bg-white text-jewelry-primary hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Explore All Products
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
