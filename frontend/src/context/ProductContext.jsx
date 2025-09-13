import React, { createContext, useContext, useReducer, useEffect } from 'react';
import axios from 'axios';

const ProductContext = createContext();

const initialState = {
  products: [],
  loading: false,
  error: null,
  categories: ['rings', 'necklaces', 'earrings', 'mangalsutras'],
  selectedCategory: 'all',
  searchQuery: '',
};

const productReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload, loading: false };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    case 'SET_CATEGORY':
      return { ...state, selectedCategory: action.payload };
    case 'SET_SEARCH':
      return { ...state, searchQuery: action.payload };
    case 'ADD_PRODUCT':
      return { ...state, products: [...state.products, action.payload] };
    case 'UPDATE_PRODUCT':
      return {
        ...state,
        products: state.products.map(product =>
          product._id === action.payload._id ? action.payload : product
        )
      };
    case 'DELETE_PRODUCT':
      return {
        ...state,
        products: state.products.filter(product => product._id !== action.payload)
      };
    default:
      return state;
  }
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  // Fetch products from API
  const fetchProducts = async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const response = await axios.get('/api/products');
      dispatch({ type: 'SET_PRODUCTS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    }
  };

  // Add new product
  const addProduct = async (productData) => {
    try {
      const response = await axios.post('/api/products', productData);
      dispatch({ type: 'ADD_PRODUCT', payload: response.data });
      return response.data;
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
      throw error;
    }
  };

  // Update product
  const updateProduct = async (id, productData) => {
    try {
      const response = await axios.put(`/api/products/${id}`, productData);
      dispatch({ type: 'UPDATE_PRODUCT', payload: response.data });
      return response.data;
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
      throw error;
    }
  };

  // Delete product
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`/api/products/${id}`);
      dispatch({ type: 'DELETE_PRODUCT', payload: id });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
      throw error;
    }
  };

  // Filter products based on category and search
  const getFilteredProducts = () => {
    let filtered = state.products;

    if (state.selectedCategory !== 'all') {
      filtered = filtered.filter(product => 
        product.category.toLowerCase() === state.selectedCategory.toLowerCase()
      );
    }

    if (state.searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    }

    return filtered;
  };

  // Get product by ID
  const getProductById = (id) => {
    return state.products.find(product => product._id === id);
  };

  // Get products by category
  const getProductsByCategory = (category) => {
    return state.products.filter(product => 
      product.category.toLowerCase() === category.toLowerCase()
    );
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const value = {
    ...state,
    fetchProducts,
    addProduct,
    updateProduct,
    deleteProduct,
    getFilteredProducts,
    getProductById,
    getProductsByCategory,
    setCategory: (category) => dispatch({ type: 'SET_CATEGORY', payload: category }),
    setSearch: (query) => dispatch({ type: 'SET_SEARCH', payload: query }),
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};
