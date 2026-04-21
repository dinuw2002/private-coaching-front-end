"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { User } from 'lucide-react';

import SocialButton from "../(components)/social-button";
import Input from '../(components)/input-ui';
import axios from 'axios';


export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  // 1. State for Login Credentials
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // 2. Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('https://private-coaching-back-end.onrender.com/api/auth/login', formData);
      
      // 4. Save the Token
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      toast.success(`Welcome back, ${response.data.user.firstName}!`);
      
      // Redirect to a protected route
      router.push('/dashboard-page'); 
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-brand-light flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-[2.5rem] p-10 shadow-sm">
        <h1 className="text-3xl font-bold text-center text-brand-dark mb-10">Login</h1>

        <form onSubmit={handleSubmit} className="space-y-2">
          <Input 
            iconType="email" 
            placeholder="Email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input 
            iconType="password" 
            placeholder="Password" 
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          
          <div className="text-center mb-6">
            <Link href="#" className="text-sm font-medium text-gray-500 hover:text-brand-dark underline decoration-gray-200 underline-offset-4">
              Forgot Password?
            </Link>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className={`w-full bg-brand-dark text-white py-4 rounded-full font-bold transition-all ${
                loading ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-95 active:scale-[0.99]'
            }`}
          >
            {loading ? 'Verifying...' : 'Login'}
          </button>
        </form>

        <div className="relative my-10 text-center">
          <hr className="border-gray-100" />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-gray-400 text-sm">
            or
          </span>
        </div>

        <div className="space-y-4">
          <SocialButton text="Continue with Google" logoType={'google'} />
          <SocialButton variant="primary" text="Continue with Apple" logoType={'apple'} />
          <SocialButton text="Continue As Guest" icon={<User size={20} className="text-gray-500" />} />
        </div>

        <p className="mt-10 text-center text-sm text-gray-400">
          Need an account?{' '}
          <Link href="/signup-page" className="text-brand-dark font-bold hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}