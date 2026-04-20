import Input from '../(components)/input-ui';
import SocialButton from "../(components)/social-button";
import { User, Mail, Lock } from 'lucide-react';
import Link from "next/link"

export default function SignUpPage() {
  return (
    <main className="min-h-screen bg-brand-light flex items-center justify-center p-6 py-12">
      <div className="w-full max-w-md bg-white rounded-[2.5rem] p-10 shadow-sm">
        <h1 className="text-3xl font-bold text-center text-brand-dark mb-8">Create Account</h1>

        <form className="space-y-3">
          {/* First & Last Name Row */}
          <div className="flex gap-3">
            <Input iconType="user" placeholder="First Name" name="firstName" required />
            <Input iconType="user" placeholder="Last Name" name="lastName" required />
          </div>

          <Input iconType="email" placeholder="Email Address" name="email" required />
          
          <Input iconType="password" placeholder="Password" name="password" required />
          
          <Input iconType="password" placeholder="Confirm Password" name="confirmPassword" required />
          
          <div className="pt-4">
            <button className="w-full bg-brand-dark text-white py-4 rounded-full font-bold hover:opacity-95 transition-all">
              Sign Up
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="relative my-10 text-center">
          <hr className="border-gray-100" />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-gray-400 text-sm">
            or
          </span>
        </div>

        {/* Social Buttons (Reusing our component) */}
        <div className="space-y-4">
          <SocialButton 
            text="Continue with Google" 
            icon={
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            } 
          />
          <SocialButton 
            variant="primary"
            text="Continue with Apple" 
            icon={
              <svg viewBox="0 0 384 512" className="w-5 h-5 fill-brand-dark">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
            } 
          />
          <SocialButton 
            text="Continue As Guest" 
            icon={<User size={20} className="text-gray-500" />} 
          />
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Already have an account? <Link href={'/login-page'}><span className="text-brand-dark font-bold cursor-pointer">Log in</span></Link>
        </p>
      </div>
    </main>
  );
}