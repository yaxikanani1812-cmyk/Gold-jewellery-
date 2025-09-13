# Luxury Jewelry Store - Full Stack Application

A complete full-stack jewelry e-commerce website built with React frontend and Node.js backend, featuring admin panel for product management.

## 🚀 Features

### Frontend (React + Tailwind CSS)
- **Modern Responsive Design**: Mobile-first approach with beautiful UI
- **SEO Optimized**: Meta tags, structured data, and clean URLs
- **Product Catalog**: Browse jewelry by categories (Rings, Necklaces, Earrings, Mangalsutras)
- **Search & Filter**: Find products by name, description, or category
- **Product Details**: Detailed product pages with specifications
- **Contact Form**: Get in touch with the store
- **Admin Panel**: Secure login and product management

### Backend (Node.js + Express + MongoDB)
- **RESTful API**: Clean API endpoints for all operations
- **Authentication**: JWT-based admin authentication
- **Product Management**: Full CRUD operations for products
- **Database**: MongoDB with Mongoose ODM
- **Security**: Helmet, CORS, rate limiting, input validation
- **Error Handling**: Comprehensive error handling and logging

## 📁 Project Structure

```
jewelry-store/
├── frontend/                 # React frontend application
│   ├── public/
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   ├── pages/          # Page components
│   │   ├── context/        # React Context for state management
│   │   └── App.jsx         # Main App component
│   ├── package.json
│   └── tailwind.config.js
├── backend/                 # Node.js backend API
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   ├── server.js           # Main server file
│   └── package.json
└── README.md
```

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **React Helmet** - SEO management

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Express Validator** - Input validation

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd jewelry-store
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../backend
   npm install
   ```

4. **Environment Setup**
   ```bash
   # Copy environment example file
   cp env.example .env
   
   # Edit .env file with your configuration
   nano .env
   ```

5. **Start MongoDB**
   ```bash
   # If using local MongoDB
   mongod
   
   # Or use MongoDB Atlas (cloud)
   # Update MONGODB_URI in .env file
   ```

6. **Start Backend Server**
   ```bash
   cd backend
   npm run dev
   # Server runs on http://localhost:5000
   ```

7. **Start Frontend Development Server**
   ```bash
   cd frontend
   npm start
   # App runs on http://localhost:3000
   ```

## 🔧 Environment Variables

Create a `.env` file in the backend directory:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/jewelry-store

# JWT Secret
JWT_SECRET=your-super-secret-jwt-key-here

# Server Configuration
PORT=5000
NODE_ENV=development

# Admin Credentials (for initial setup)
ADMIN_EMAIL=admin@jewelrystore.com
ADMIN_PASSWORD=admin123
```

## 👤 Admin Access

Default admin credentials:
- **Email**: admin@jewelrystore.com
- **Password**: admin123

You can change these in the `.env` file or create new admin users through the API.

## 📱 Pages & Features

### Public Pages
- **Home**: Hero section, category showcase, featured products
- **About**: Company story, mission, team information
- **Products**: Product catalog with search and filtering
- **Product Detail**: Individual product pages with specifications
- **Contact**: Contact form and store information

### Admin Panel
- **Login**: Secure admin authentication
- **Product Management**: Add, edit, delete products
- **Analytics**: Store statistics and insights

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `GET /api/auth/me` - Get current user
- `POST /api/auth/register` - Register new user

### Products
- `GET /api/products` - Get all products (with filtering)
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Admin only)
- `PUT /api/products/:id` - Update product (Admin only)
- `DELETE /api/products/:id` - Delete product (Admin only)
- `GET /api/products/category/:category` - Get products by category

## 🚀 Deployment

### Frontend Deployment (Netlify/Vercel)

1. **Build the frontend**
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `build`
   - Add environment variable: `REACT_APP_API_URL=https://your-backend-url.com`

3. **Deploy to Vercel**
   ```bash
   cd frontend
   npx vercel
   ```

### Backend Deployment (Render/Heroku)

1. **Prepare for deployment**
   ```bash
   cd backend
   # Ensure all dependencies are in package.json
   ```

2. **Deploy to Render**
   - Connect GitHub repository
   - Set build command: `npm install`
   - Set start command: `npm start`
   - Add environment variables

3. **Deploy to Heroku**
   ```bash
   cd backend
   heroku create your-app-name
   heroku config:set MONGODB_URI=your-mongodb-uri
   heroku config:set JWT_SECRET=your-jwt-secret
   git push heroku main
   ```

### Database Setup
- **MongoDB Atlas** (Recommended for production)
- **Local MongoDB** (For development)

## 🎨 Customization

### Branding
1. Update logo and brand name in `frontend/src/components/Navbar.jsx`
2. Modify color scheme in `frontend/tailwind.config.js`
3. Update company information in About page

### Adding New Categories
1. Update category enum in `backend/models/Product.js`
2. Add category to frontend context in `frontend/src/context/ProductContext.jsx`
3. Update category filters in Products page

### Styling
- Modify Tailwind classes in components
- Update CSS custom properties in `frontend/src/index.css`
- Add new components in `frontend/src/components/`

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Input validation and sanitization
- CORS protection
- Rate limiting
- Helmet security headers
- Environment variable protection

## 📊 Performance Optimizations

- Image optimization
- Lazy loading
- Code splitting
- Database indexing
- API response caching
- Compressed responses

## 🧪 Testing

```bash
# Frontend tests
cd frontend
npm test

# Backend tests (when implemented)
cd backend
npm test
```

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📞 Support

For support and questions:
- Email: support@jewelrystore.com
- Documentation: [Link to docs]
- Issues: [GitHub Issues]

---

**Built with ❤️ for jewelry lovers everywhere**
