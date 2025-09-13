import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAuth } from '../context/AuthContext';
import { useProducts } from '../context/ProductContext';
import AdminLogin from '../components/AdminLogin';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Admin = () => {
  const { isAuthenticated, user } = useAuth();
  const { products, loading } = useProducts();
  const [activeTab, setActiveTab] = useState('products');

  if (!isAuthenticated) {
    return <AdminLogin />;
  }

  return (
    <>
      <Helmet>
        <title>Admin Panel - Jewelry Store Management</title>
        <meta name="description" content="Admin panel for managing jewelry store products and content." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Admin Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="container-custom py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-serif font-bold text-gray-800">
                  Admin Panel
                </h1>
                <p className="text-gray-600">
                  Welcome back, {user?.name || 'Admin'}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">
                  {products.length} products
                </span>
                <button
                  onClick={() => window.location.reload()}
                  className="btn-secondary text-sm py-2 px-4"
                >
                  Refresh
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Admin Navigation */}
        <div className="bg-white border-b">
          <div className="container-custom">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab('products')}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-300 ${
                  activeTab === 'products'
                    ? 'border-jewelry-primary text-jewelry-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Products
              </button>
              <button
                onClick={() => setActiveTab('add-product')}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-300 ${
                  activeTab === 'add-product'
                    ? 'border-jewelry-primary text-jewelry-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Add Product
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-300 ${
                  activeTab === 'analytics'
                    ? 'border-jewelry-primary text-jewelry-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Analytics
              </button>
            </nav>
          </div>
        </div>

        {/* Admin Content */}
        <div className="container-custom py-8">
          {activeTab === 'products' && <ProductList />}
          {activeTab === 'add-product' && <ProductForm />}
          {activeTab === 'analytics' && <AnalyticsTab />}
        </div>
      </div>
    </>
  );
};

// Analytics Tab Component
const AnalyticsTab = () => {
  const { products } = useProducts();
  
  const categoryStats = products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {});

  const totalValue = products.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-serif font-bold text-gray-800">
        Store Analytics
      </h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Products</p>
              <p className="text-3xl font-bold text-gray-800">{products.length}</p>
            </div>
            <div className="w-12 h-12 bg-jewelry-primary rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Value</p>
              <p className="text-3xl font-bold text-gray-800">${totalValue.toLocaleString()}</p>
            </div>
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Categories</p>
              <p className="text-3xl font-bold text-gray-800">{Object.keys(categoryStats).length}</p>
            </div>
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-serif font-semibold text-gray-800 mb-6">
          Products by Category
        </h3>
        <div className="space-y-4">
          {Object.entries(categoryStats).map(([category, count]) => (
            <div key={category} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-jewelry-primary rounded-full"></div>
                <span className="font-medium text-gray-800 capitalize">{category}</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-jewelry-primary h-2 rounded-full" 
                    style={{ width: `${(count / products.length) * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-600 w-8 text-right">
                  {count}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
