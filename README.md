# HomeFind

HomeFind is an affordable housing marketplace app that connects individuals seeking affordable housing with landlords and property management companies. This web platform provides a transparent and efficient way for renters to find suitable accommodations and for landlords to list properties. 

## Features

### User Management
- **Authentication**: Secure user registration and login using social media or email.
- **Role-Based Access**: Different roles for Renters, Landlords, and Admins.
- **Profile Management**: Allows both Renters and Landlords to manage their profiles, including preferences and contact details.

### Property Listings
- **Detailed Listings**: Landlords can create listings with property details, including amenities, photos, and rent prices.
- **Media Uploads**: Support for high-quality images and videos.
- **Interactive Map**: Google Maps integration to display property locations.

### Search and Filter
- **Search Properties**: Find homes by location, rent price, number of bedrooms, property type, etc.
- **Advanced Filtering**: Filter properties based on amenities like pet-friendliness, parking, and more.
- **Save Searches and Favorites**: Users can save specific searches and bookmark listings.

### Application and Tenant Management
- **Application Process**: Renters can apply to listings by filling out an application form and uploading documents.
- **Real-Time Updates**: Notifications and alerts on application status.
- **Tenant Screening**: Optional integration with tenant screening tools for background checks.

### In-Platform Messaging
- **Direct Messaging**: Renters and Landlords can communicate through in-app messaging.
- **Real-Time Notifications**: Using Laravel Echo and Pusher for instant updates.

### Notifications
- **Email and Push Notifications**: Alerts for new messages, application updates, and saved search matches.
- **SMS Alerts**: Optional SMS notifications through Twilio.

### Reviews and Ratings
- **Review System**: Renters can review properties and landlords, and vice versa.
- **Moderation**: Admins can monitor reviews to maintain a positive platform experience.

### Admin Dashboard
- **Listings and User Management**: Admins can manage listings, users, and applications.
- **Analytics**: Track platform engagement, listing views, and more.
- **Content Moderation**: Admins can monitor user-generated content and manage disputes.

### Payments and Monetization
- **Subscription Plans**: Optional premium features for landlords, like priority listing.
- **Transaction Processing**: Secure payment integration with Stripe or PayPal.

## Installation

### Requirements
- PHP >= 8.0
- Composer
- MySQL or any other database supported by Laravel
- Node.js & npm

### Setup Instructions
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/homefind.git
   cd homefind
   ```
   
2. **Install dependencies**:
   ```bash
   composer install
   npm install
   ```
   
3. **Environment Setup**:<br/>
   Copy the .env.example to create your own .env file:
   ```bash
    cp env.example .env
     ```

4. **Generate application key**:
   ```bash
   php artisan key:generate
   ```

5. **Build frontend assets**:
   ```bash
   npm run dev
   ```

6. **Start the development server**:
   ```bash
   php artisan serve
   ```

## License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
