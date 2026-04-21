"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import toast from 'react-hot-toast';
import { User } from 'lucide-react';

import Input from '../(components)/input-ui';
import SocialButton from "../(components)/social-button";
import axios from 'axios';

export default function SignUpPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  // 1. State for Form Data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
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
      // Logic check before hitting API
      if (formData.password !== formData.confirmPassword) {
        toast.error("Passwords do not match!");
        setLoading(false);
        return;
      }

      const response = await axios.post('https://private-coaching-back-end.onrender.com/api/auth/register', formData);
      toast.success("Account created successfully!");
      router.push('/login-page');
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-brand-light flex items-center justify-center p-6 py-12">
      <div className="w-full max-w-md bg-white rounded-[2.5rem] p-10 shadow-sm">
        <h1 className="text-3xl font-bold text-center text-brand-dark mb-8">Create Account</h1>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex gap-3">
            <Input 
              iconType="user" 
              placeholder="First Name" 
              name="firstName" 
              value={formData.firstName} 
              onChange={handleChange} 
              required 
            />
            <Input 
              iconType="user" 
              placeholder="Last Name" 
              name="lastName" 
              value={formData.lastName} 
              onChange={handleChange} 
              required 
            />
          </div>

          <Input 
            iconType="email" 
            placeholder="Email Address" 
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
          
          <Input 
            iconType="password" 
            placeholder="Confirm Password" 
            name="confirmPassword" 
            value={formData.confirmPassword} 
            onChange={handleChange} 
            required 
          />
          
          <div className="pt-4">
            <button 
              type="submit"
              disabled={loading}
              className={`w-full bg-brand-dark text-white py-4 rounded-full font-bold transition-all ${
                loading ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-95 active:scale-[0.98]'
              }`}
            >
              {loading ? 'Creating Account...' : 'Sign Up'}
            </button>
          </div>
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

        <p className="mt-8 text-center text-sm text-gray-500">
          Already have an account?{' '}
          <Link href="/login-page">
            <span className="text-brand-dark font-bold cursor-pointer hover:underline">Log in</span>
          </Link>
        </p>
      </div>
    </main>
  );
}