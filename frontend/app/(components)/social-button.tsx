import React from 'react';

interface SocialButtonProps {
  icon: React.ReactNode;
  text: string;
  variant?: 'outline' | 'primary' | 'secondary';
  onClick?: () => void;
}

const SocialButton = ({ icon, text, variant = 'outline', onClick }: SocialButtonProps) => {
  const baseStyles = "w-full flex items-center justify-center gap-3 py-4 rounded-full font-semibold transition-all";
  
  const variants = {
    outline: "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50",
    primary: "bg-brand-primary text-brand-dark hover:opacity-90",
    secondary: "bg-transparent text-gray-700 hover:bg-gray-100"
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
      <span className="w-5 h-5 flex items-center justify-center">
        {icon}
      </span>
      {text}
    </button>
  );
};

export default SocialButton;