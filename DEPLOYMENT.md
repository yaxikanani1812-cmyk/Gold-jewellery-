# Deployment Guide

This guide covers deploying the Jewelry Store application to various platforms.

## 🚀 Quick Deployment Options

### Option 1: Netlify + Render (Recommended)

**Frontend (Netlify)**
1. Connect your GitHub repository to Netlify
2. Set build command: `cd frontend && npm run build`
3. Set publish directory: `frontend/build`
4. Add environment variable: `REACT_APP_API_URL=https://your-backend-url.onrender.com`

**Backend (Render)**
1. Connect your GitHub repository to Render
2. Set build command: `cd backend && npm install`
3. Set start command: `cd backend && npm start`
4. Add environment variables in Render dashboard

### Option 2: Vercel + Railway

**Frontend (Vercel)**
```bash
cd frontend
npx vercel
```

**Backend (Railway)**
1. Connect GitHub repository
2. Set start command: `cd backend && npm start`
3. Add environment variables

## 📋 Pre-Deployment Checklist

### Frontend
- [ ] Update API URLs in production
- [ ] Optimize images and assets
- [ ] Test responsive design
- [ ] Verify SEO meta tags
- [ ] Check all links and navigation

### Backend
- [ ] Set secure JWT secret
- [ ] Configure MongoDB connection
- [ ] Set up environment variables
- [ ] Test all API endpoints
- [ ] Configure CORS for production domain

## 🔧 Environment Variables

### Frontend (.env)
```env
REACT_APP_API_URL=https://your-backend-url.com
REACT_APP_ENVIRONMENT=production
```

### Backend (.env)
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/jewelry-store
JWT_SECRET=your-super-secure-jwt-secret-key
ADMIN_EMAIL=admin@yourdomain.com
ADMIN_PASSWORD=your-secure-admin-password
```

## 🗄️ Database Setup

### MongoDB Atlas (Recommended)
1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Create database user
4. Whitelist your IP addresses
5. Get connection string
6. Update MONGODB_URI in environment variables

### Local MongoDB
```bash
# Install MongoDB
brew install mongodb/brew/mongodb-community

# Start MongoDB
brew services start mongodb/brew/mongodb-community

# Connection string
MONGODB_URI=mongodb://localhost:27017/jewelry-store
```

## 🌐 Domain & SSL

### Custom Domain Setup
1. Purchase domain from provider (Namecheap, GoDaddy, etc.)
2. Configure DNS records:
   - A record pointing to your hosting provider
   - CNAME for www subdomain
3. Enable SSL certificate (usually automatic on modern platforms)

### SSL Configuration
- Netlify: Automatic SSL with Let's Encrypt
- Vercel: Automatic SSL
- Render: Automatic SSL
- Railway: Automatic SSL

## 📊 Performance Optimization

### Frontend
```bash
# Build optimization
cd frontend
npm run build

# Analyze bundle size
npm install -g webpack-bundle-analyzer
npx webpack-bundle-analyzer build/static/js/*.js
```

### Backend
```javascript
// Enable compression
const compression = require('compression');
app.use(compression());

// Set cache headers
app.use(express.static('public', {
  maxAge: '1d'
}));
```

## 🔒 Security Checklist

### Production Security
- [ ] Use HTTPS everywhere
- [ ] Set secure JWT secret (32+ characters)
- [ ] Enable CORS for specific domains only
- [ ] Set up rate limiting
- [ ] Use environment variables for secrets
- [ ] Enable Helmet security headers
- [ ] Validate all inputs
- [ ] Use strong admin passwords

### Database Security
- [ ] Use MongoDB Atlas with IP whitelisting
- [ ] Enable database authentication
- [ ] Regular backups
- [ ] Monitor database access

## 📈 Monitoring & Analytics

### Application Monitoring
- **Uptime**: UptimeRobot, Pingdom
- **Performance**: New Relic, DataDog
- **Errors**: Sentry, LogRocket

### Analytics
- **Google Analytics**: Track user behavior
- **Google Search Console**: Monitor SEO performance
- **Hotjar**: User experience insights

## 🚨 Troubleshooting

### Common Issues

**Frontend Build Fails**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Backend Connection Issues**
```bash
# Check environment variables
echo $MONGODB_URI
echo $JWT_SECRET

# Test database connection
node -e "require('mongoose').connect(process.env.MONGODB_URI)"
```

**CORS Errors**
```javascript
// Update CORS configuration
app.use(cors({
  origin: ['https://your-frontend-domain.com'],
  credentials: true
}));
```

## 🔄 CI/CD Pipeline

### GitHub Actions Example
```yaml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Netlify
        uses: nwtgck/actions-netlify@v1.2
        with:
          publish-dir: './frontend/build'
          production-branch: main
          github-token: ${{ secrets.GITHUB_TOKEN }}
          deploy-message: "Deploy from GitHub Actions"

  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Render
        run: |
          # Trigger Render deployment
          curl -X POST "https://api.render.com/v1/services/$SERVICE_ID/deploys" \
            -H "Authorization: Bearer $RENDER_API_KEY"
```

## 📱 Mobile App Deployment

### React Native (Future)
```bash
# Install React Native CLI
npm install -g react-native-cli

# Initialize mobile app
npx react-native init JewelryStoreMobile

# Share components between web and mobile
```

## 🎯 Post-Deployment

### Testing
1. Test all user flows
2. Verify admin panel functionality
3. Check mobile responsiveness
4. Test contact form
5. Verify SEO meta tags

### Launch Checklist
- [ ] Domain configured
- [ ] SSL certificate active
- [ ] Analytics tracking
- [ ] Error monitoring
- [ ] Backup strategy
- [ ] Performance monitoring
- [ ] Security headers
- [ ] Admin credentials updated

## 📞 Support

For deployment issues:
- Check platform-specific documentation
- Review error logs
- Test locally first
- Use staging environment

---

**Happy Deploying! 🚀**
