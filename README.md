# AI Resume Builder

This repository contains the source code for an AI-powered resume builder application. Users can input their data, preview the resume as they fill it, and generate professional resumes. Additionally, the application includes features such as AI-generated summaries, data storage, and management through Neon Postgres, and an integrated AI chatbot for assistance.



## Live Site
You can access the live application [here](https://asha-ai-resumebuilder.netlify.app/).

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)
- [Live Site](#live-site)

## Features
- **Interactive Form Section:** Users can fill in their personal, educational, and professional details in an intuitive form.
- **Live Preview:** A real-time preview of the resume is displayed as users input their data.
- **AI-Powered Summary Generator:** Integrated AI generates a professional summary for the user’s resume based on the provided information.
- **Resume Management:** Users can download, share, delete, or edit their resumes at any time.
- **Data Storage:** User data is securely stored in Neon Postgres, ensuring seamless access and management.
- **Strapi Backend:** The application uses Strapi to connect the frontend with the Neon Postgres database.
- **AI Chatbot:** An AI chatbot powered by Gemini is available to assist users with any questions or guidance.

## Technologies Used

- **Frontend**: 
  - React.js
  - Vite
  - Tailwind CSS
  - Shadcn UI components
- **Backend**:
  - Clerk for authentication and authorization
  - Strapi for API management
  - Gemini API for natural language processing
- **Other**:
  - Next.js for routing
  - React Icons for UI elements

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Neon Postgres account
- Strapi instance connected to Neon Postgres

### Steps to Set Up the Project

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/adarshpheonix2810/Ai-resume-builder-Landing-Page.git
   cd Ai-resume-builder-Landing-Page
   ```

2. **Install Dependencies:**
   Run the following command to install all the required dependencies:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**
   Create a `.env` file in the root directory and add the following:
   ```env
   VITE_API_URL=<your-strapi-api-url>
   VITE_POSTGRES_URL=<your-neon-postgres-url>
   VITE_GEMINI_API_KEY=<your-gemini-api-key>
   VITE_PAYPAL_CLIENT_ID=<your-paypal-client-id>
   VITE_RAZORPAY_KEY=<your-razorpay-key>
   ```
   Replace the placeholders with your actual credentials.

4. **Run the Development Server:**
   Start the application in development mode:
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:5173`.

5. **Build for Production:**
   To create an optimized production build:
   ```bash
   npm run build
   ```

6. **Preview Production Build:**
   To preview the production build locally:
   ```bash
   npm run preview
   ```

### Backend Setup

1. **Set Up Strapi:**
   - Install and configure Strapi.
   - Connect it to your Neon Postgres database.
   - Create the necessary APIs and endpoints to handle user data.

2. **Deploy Strapi:**
   Deploy Strapi on a platform of your choice (e.g., Heroku, Vercel, or your own server).

### Additional Configuration

- **AI Chatbot:**
  - Ensure the Gemini API is correctly integrated by providing your API key in the `.env` file.

- **Payment Gateways:**
  - Set up Razorpay and PayPal with the provided API keys in the `.env` file.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure that your code adheres to the project’s coding standards.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.



