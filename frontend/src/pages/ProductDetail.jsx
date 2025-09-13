import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useProducts } from '../context/ProductContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { getProductById } = useProducts();
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/products" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{product.name} - Premium Jewelry | Jewelry Store</title>
        <meta name="description" content={product.description} />
        <meta name="keywords" content={`${product.name}, ${product.category}, jewelry, premium jewelry`} />
        <meta property="og:title" content={`${product.name} - Premium Jewelry`} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.image} />
        <meta property="og:type" content="product" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container-custom py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link to="/" className="text-gray-500 hover:text-jewelry-primary">
                Home
              </Link>
              <span className="text-gray-400">/</span>
              <Link to="/products" className="text-gray-500 hover:text-jewelry-primary">
                Products
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-800">{product.name}</span>
            </nav>
          </div>
        </div>

        <div className="container-custom py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-square bg-white rounded-2xl shadow-lg overflow-hidden">
                <img
                  src={product.image || '/img/placeholder.jpg'}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Additional Images (if available) */}
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((index) => (
                  <div key={index} className="aspect-square bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                      src={product.image || '/img/placeholder.jpg'}
                      alt={`${product.name} view ${index}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-jewelry-primary text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {product.category}
                  </span>
                </div>
                
                <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">
                  {product.name}
                </h1>
                
                <div className="text-3xl font-bold text-jewelry-primary mb-6">
                  ${product.price}
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Product Features */}
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-semibold text-gray-800">
                  Product Features
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-jewelry-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span className="text-gray-600">Premium quality materials</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-jewelry-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span className="text-gray-600">Handcrafted by skilled artisans</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-jewelry-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span className="text-gray-600">Authenticity certificate included</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-jewelry-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span className="text-gray-600">Lifetime warranty</span>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button className="w-full btn-primary text-lg py-4">
                  Contact for Purchase
                </button>
                <button className="w-full btn-secondary text-lg py-4">
                  Add to Wishlist
                </button>
              </div>

              {/* Additional Info */}
              <div className="border-t pt-8">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Material</h4>
                    <p className="text-gray-600">Premium Gold</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Weight</h4>
                    <p className="text-gray-600">Custom</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Care Instructions</h4>
                    <p className="text-gray-600">Professional cleaning recommended</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Delivery</h4>
                    <p className="text-gray-600">Free worldwide shipping</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-20">
            <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8 text-center">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* This would typically show related products from the same category */}
              <div className="card">
                <div className="aspect-square bg-gray-200 rounded-t-xl"></div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Related Product</h3>
                  <p className="text-jewelry-primary font-bold">$299</p>
                </div>
              </div>
              <div className="card">
                <div className="aspect-square bg-gray-200 rounded-t-xl"></div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Related Product</h3>
                  <p className="text-jewelry-primary font-bold">$299</p>
                </div>
              </div>
              <div className="card">
                <div className="aspect-square bg-gray-200 rounded-t-xl"></div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Related Product</h3>
                  <p className="text-jewelry-primary font-bold">$299</p>
                </div>
              </div>
              <div className="card">
                <div className="aspect-square bg-gray-200 rounded-t-xl"></div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Related Product</h3>
                  <p className="text-jewelry-primary font-bold">$299</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
