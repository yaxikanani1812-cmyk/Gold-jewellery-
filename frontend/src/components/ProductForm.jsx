import React, { useState } from 'react';
import { useProducts } from '../context/ProductContext';

const ProductForm = () => {
  const { addProduct, categories } = useProducts();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    image: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const productData = {
        ...formData,
        price: parseFloat(formData.price)
      };
      
      await addProduct(productData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        description: '',
        price: '',
        category: '',
        image: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6">
        Add New Product
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Product Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input-field"
            placeholder="Enter product name"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Description *
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={4}
            className="input-field resize-none"
            placeholder="Enter product description"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
              Price ($) *
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              min="0"
              step="0.01"
              className="input-field"
              placeholder="0.00"
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
              Category *
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="input-field"
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
            Image URL *
          </label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
            className="input-field"
            placeholder="https://example.com/image.jpg"
          />
          <p className="mt-2 text-sm text-gray-500">
            Enter a valid image URL. For demo purposes, you can use placeholder images like:
            <br />
            <code className="bg-gray-100 px-2 py-1 rounded text-xs">
              https://via.placeholder.com/400x400/d4af37/ffffff?text=Jewelry
            </code>
          </p>
        </div>

        {submitStatus === 'success' && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
            Product added successfully!
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
            Error adding product. Please try again.
          </div>
        )}

        <div className="flex space-x-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Adding Product...' : 'Add Product'}
          </button>
          
          <button
            type="button"
            onClick={() => {
              setFormData({
                name: '',
                description: '',
                price: '',
                category: '',
                image: ''
              });
              setSubmitStatus(null);
            }}
            className="btn-secondary"
          >
            Clear Form
          </button>
        </div>
      </form>

      {/* Sample Data Helper */}
      <div className="mt-8 p-6 bg-gray-50 rounded-xl">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Sample Data for Testing
        </h3>
        <div className="space-y-2 text-sm">
          <p className="text-gray-600">
            <strong>Name:</strong> Diamond Engagement Ring
          </p>
          <p className="text-gray-600">
            <strong>Description:</strong> A stunning diamond engagement ring featuring a brilliant cut center stone set in 18k white gold.
          </p>
          <p className="text-gray-600">
            <strong>Price:</strong> 2500
          </p>
          <p className="text-gray-600">
            <strong>Category:</strong> rings
          </p>
          <p className="text-gray-600">
            <strong>Image:</strong> https://via.placeholder.com/400x400/d4af37/ffffff?text=Diamond+Ring
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            setFormData({
              name: 'Diamond Engagement Ring',
              description: 'A stunning diamond engagement ring featuring a brilliant cut center stone set in 18k white gold.',
              price: '2500',
              category: 'rings',
              image: 'https://via.placeholder.com/400x400/d4af37/ffffff?text=Diamond+Ring'
            });
          }}
          className="mt-4 btn-secondary text-sm py-2 px-4"
        >
          Fill Sample Data
        </button>
      </div>
    </div>
  );
};

export default ProductForm;
