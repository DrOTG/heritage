# Project Description: Heritage

**Client**: Dr OTG  
**Project Name**: Heritage

## Overview
This website is designed to serve Zambian medical students by offering a curated selection of essential resources. The resources are provided via a Google Drive folder, with users gaining access upon successful payment. The website supports payments through Airtel Money and MTN Money via the LencoPay payment gateway. The backend is built with PHP, and it handles file storage, user authentication, and access management.

## Key Features

### **Admin Dashboard Features**
- Manage available Google Drive folders and their pricing.
- Monitor payments and user access.
- Add, update, or delete resources.
- Generate reports and analytics.
- Manage user access and payment records.

### **Client Dashboard Features**
- View a list of purchased resources and access them via Google Drive.
- View payment history.
- Update user profile details.

### **Landing Page Features**
- A list of available resources with descriptions and prices.
- "Get in Touch" section with a button for WhatsApp chat and links to social media profiles.

### **Authentication**
- Users must log in with email and password.
- Upon successful login, the backend will issue a JWT token for API requests.
- Users must authenticate via LencoPay payment system (Airtel Money and MTN Money) to access the resources.

## Technologies Used
- **Frontend**: React Vite, PrimeReact, PrimeFlex, PrimeIcons.
- **Backend**: PHP, MySQL.
- **Payment Gateway**: LencoPay (Airtel Money and MTN Money).
- **Authentication**: Custom PHP-based user authentication with JWT tokens.
- **File Storage**: Google Drive (access granted after successful payment).
- **Design Tool**: Penpot.

## Workflow
1. **User Workflow**
   - Users log in via email and password.
   - They can browse available resources on the landing page.
   - After making a payment via LencoPay, the backend grants access to the resource folder.
   - Users can view purchased resources in their dashboard.
   
2. **Admin Workflow**
   - Admins manage resources and set prices via the dashboard.
   - They can view user access logs and monitor payment history.
   - Admins can update resources, grant or revoke access as needed.

3. **Payment and Access Management**
   - The PHP backend integrates with LencoPay to handle payments and verify the payment status.
   - Upon successful payment, users are granted access to the specific Google Drive folder linked to the resource they purchased.

## Technologies Overview
- **Frontend**: The frontend of the website is built using React Vite, utilizing the PrimeReact component library, PrimeFlex for layout styling, and PrimeIcons for various UI icons. 
- **Backend**: The PHP backend is a RESTful API that handles user authentication (JWT), file access management, and integrates with LencoPay for payment processing. The database is powered by MySQL.
- **Authentication and Access Control**: Authentication is handled via JWT tokens in the Authorization header. Users log in with their email and password to obtain a token, which they use in subsequent API requests for authentication.
- **File Access**: Upon successful payment, the user's email is used to grant access to a specific Google Drive folder containing the resources. The access management is handled via the PHP backend.
