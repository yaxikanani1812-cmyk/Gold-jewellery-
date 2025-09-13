import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useProducts } from '../context/ProductContext';

const Products = () => {
  const { 
    getFilteredProducts, 
    categories, 
    selectedCategory, 
    searchQuery, 
    setCategory, 
    setSearch,
    loading 
  } = useProducts();
  
  const [searchParams, setSearchParams] = useSearchParams();
  const [localSearch, setLocalSearch] = useState('');

  // Initialize category and search from URL params
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const searchParam = searchParams.get('search');
    
    if (categoryParam) {
      setCategory(categoryParam);
    }
    if (searchParam) {
      setSearch(searchParam);
      setLocalSearch(searchParam);
    }
  }, [searchParams, setCategory, setSearch]);

  const handleCategoryChange = (category) => {
    setCategory(category);
    const newParams = new URLSearchParams(searchParams);
    if (category === 'all') {
      newParams.delete('category');
    } else {
      newParams.set('category', category);
    }
    setSearchParams(newParams);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setLocalSearch(value);
    setSearch(value);
    
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set('search', value);
    } else {
      newParams.delete('search');
    }
    setSearchParams(newParams);
  };

  const filteredProducts = getFilteredProducts();

  return (
    <>
      <Helmet>
        <title>Jewelry Collection - Premium Rings, Necklaces, Earrings & Mangalsutras</title>
        <meta name="description" content="Browse our complete collection of premium jewelry including rings, necklaces, earrings, and mangalsutras. Find the perfect piece for every occasion." />
        <meta name="keywords" content="jewelry collection, rings, necklaces, earrings, mangalsutras, premium jewelry, gold jewelry" />
        <meta property="og:title" content="Jewelry Collection - Premium Collection" />
        <meta property="og:description" content="Browse our complete collection of premium jewelry." />
      </Helmet>

      {/* Header */}
      <section className="bg-gradient-to-r from-jewelry-primary to-jewelry-secondary text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Our Jewelry Collection
          </h1>
          <p className="text-xl opacity-90">
            Discover exquisite pieces crafted with love and precision
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="w-full lg:w-96">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={localSearch}
                  onChange={handleSearchChange}
                  className="input-field pl-12"
                />
                <svg 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleCategoryChange('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-jewelry-primary text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-jewelry-primary hover:text-white'
                }`}
              >
                All Products
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize ${
                    selectedCategory === category
                      ? 'bg-jewelry-primary text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-jewelry-primary hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {loading ? (
            <div className="text-center py-16">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-jewelry-primary"></div>
              <p className="mt-4 text-gray-600">Loading products...</p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
                No Products Found
              </h3>
              <p className="text-gray-600 mb-6">
                {searchQuery || selectedCategory !== 'all' 
                  ? 'Try adjusting your search or filter criteria'
                  : 'No products available at the moment'
                }
              </p>
              {(searchQuery || selectedCategory !== 'all') && (
                <button
                  onClick={() => {
                    setLocalSearch('');
                    setSearch('');
                    handleCategoryChange('all');
                  }}
                  className="btn-primary"
                >
                  Clear Filters
                </button>
              )}
            </div>
          ) : (
            <>
              {/* Results Count */}
              <div className="mb-8">
                <p className="text-gray-600">
                  Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                  {selectedCategory !== 'all' && ` in ${selectedCategory}`}
                  {searchQuery && ` matching "${searchQuery}"`}
                </p>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.map((product) => (
                  <div key={product._id} className="card group">
                    <div className="relative overflow-hidden rounded-t-xl">
                      <img
                        src={product.image || '/img/placeholder.jpg'}
                        alt={product.name}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                      <div className="absolute top-4 right-4">
                        <span className="bg-jewelry-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                          {product.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-serif font-semibold text-gray-800 mb-2 group-hover:text-jewelry-primary transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-jewelry-primary">
                          ${product.price}
                        </span>
                        <Link
                          to={`/products/${product._id}`}
                          className="btn-primary text-sm py-2 px-4"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Products;
