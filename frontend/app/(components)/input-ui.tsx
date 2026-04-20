"use client";
import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, User } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  iconType: 'email' | 'password' | 'user';
}

const Input = ({ iconType, ...props }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = iconType === 'password';

  
  const icons = {
    email: <Mail size={18} strokeWidth={1.5} />,
    password: <Lock size={18} strokeWidth={1.5} />,
    user: <User size={18} strokeWidth={1.5} />
  };

  return (
    <div className="relative w-full mb-2">
      {/* Left-side Icon */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        {icons[iconType]}
      </div>

      <input
        {...props}
        type={isPassword && !showPassword ? 'password' : (iconType === 'email' ? 'email' : 'text')}
        className="w-full bg-white border border-gray-100 rounded-2xl py-4 pl-12 pr-12 focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all text-gray-700 placeholder:text-gray-400 text-[15px] shadow-sm"
      />

      {/* Right-side Password Toggle */}
      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-dark transition-colors"
          tabIndex={-1}
        >
          {showPassword ? <EyeOff size={18} strokeWidth={1.5} /> : <Eye size={18} strokeWidth={1.5} />}
        </button>
      )}
    </div>
  );
};

export default Input;