Private Coaching Platform - Frontend

This is a modern, responsive, and type-safe frontend built with Next.js 15 and Tailwind CSS. It serves as the user interface for a private coaching platform, featuring a complete authentication system and a protected dashboard.

⚙️ Getting Started

1. Prerequisites
Node.js (v18 or higher)

Backend server running (see Backend README)

2. Installation
Clone the repository and install the dependencies:


git clone <your-frontend-repo-link>
cd frontend
npm install

3. API Configuration
Ensure your Axios instance in src/lib/axios.ts points to your backend URL:

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Replace with your backend URL
});

export default api;

4. Run the App

npm run dev
Open http://localhost:3000 with your browser to see the result.