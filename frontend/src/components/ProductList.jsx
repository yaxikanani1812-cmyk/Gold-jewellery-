import React, { useState } from 'react';
import { useProducts } from '../context/ProductContext';
import { useAuth } from '../context/AuthContext';

const ProductList = () => {
  const { products, deleteProduct, updateProduct } = useProducts();
  const { logout } = useAuth();
  const [editingProduct, setEditingProduct] = useState(null);
  const [editForm, setEditForm] = useState({});

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await deleteProduct(id);
      } catch (error) {
        alert('Error deleting product');
      }
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product._id);
    setEditForm({
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      image: product.image
    });
  };

  const handleUpdate = async (id) => {
    try {
      await updateProduct(id, editForm);
      setEditingProduct(null);
      setEditForm({});
    } catch (error) {
      alert('Error updating product');
    }
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
    setEditForm({});
  };

  const handleEditChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value
    });
  };

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
        <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
          No Products Yet
        </h3>
        <p className="text-gray-600 mb-6">
          Start by adding your first product to the collection.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-serif font-bold text-gray-800">
          Manage Products
        </h2>
        <button
          onClick={logout}
          className="text-red-600 hover:text-red-800 font-medium"
        >
          Logout
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingProduct === product._id ? (
                      <div className="space-y-2">
                        <input
                          type="text"
                          name="name"
                          value={editForm.name}
                          onChange={handleEditChange}
                          className="input-field text-sm py-1"
                          placeholder="Product name"
                        />
                        <textarea
                          name="description"
                          value={editForm.description}
                          onChange={handleEditChange}
                          rows={2}
                          className="input-field text-sm py-1 resize-none"
                          placeholder="Description"
                        />
                        <input
                          type="url"
                          name="image"
                          value={editForm.image}
                          onChange={handleEditChange}
                          className="input-field text-sm py-1"
                          placeholder="Image URL"
                        />
                      </div>
                    ) : (
                      <div className="flex items-center space-x-4">
                        <img
                          src={product.image || '/img/placeholder.jpg'}
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {product.name}
                          </div>
                          <div className="text-sm text-gray-500 line-clamp-2">
                            {product.description}
                          </div>
                        </div>
                      </div>
                    )}
                  </td>
                  
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingProduct === product._id ? (
                      <select
                        name="category"
                        value={editForm.category}
                        onChange={handleEditChange}
                        className="input-field text-sm py-1"
                      >
                        <option value="rings">Rings</option>
                        <option value="necklaces">Necklaces</option>
                        <option value="earrings">Earrings</option>
                        <option value="mangalsutras">Mangalsutras</option>
                      </select>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-jewelry-primary text-white capitalize">
                        {product.category}
                      </span>
                    )}
                  </td>
                  
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingProduct === product._id ? (
                      <input
                        type="number"
                        name="price"
                        value={editForm.price}
                        onChange={handleEditChange}
                        className="input-field text-sm py-1 w-24"
                        placeholder="0.00"
                        step="0.01"
                      />
                    ) : (
                      <div className="text-sm font-medium text-gray-900">
                        ${product.price}
                      </div>
                    )}
                  </td>
                  
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {editingProduct === product._id ? (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleUpdate(product._id)}
                          className="text-green-600 hover:text-green-900"
                        >
                          Save
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(product)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(product._id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-gray-500">
        Showing {products.length} product{products.length !== 1 ? 's' : ''}
      </div>
    </div>
  );
};

export default ProductList;
