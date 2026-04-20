import Link from "next/link";
import SocialButton from "./(components)/social-button";
import { User } from 'lucide-react';


export default function WelcomePage() {
  return (
    <main className="min-h-screen bg-brand-light flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-[2.5rem] p-8 shadow-sm">
        {/* Illustration Placeholder */}
        <div className="flex justify-center mb-8">
           <img src="/illustration.png" alt="Coaching" className="w-48 h-48 object-contain" />
        </div>

        <h1 className="text-2xl font-bold text-center text-brand-dark mb-2">Private Coaching</h1>
        <p className="text-gray-500 text-center mb-8 text-sm">
          Add one-on-one, confidential sessions for only $35 per session
        </p>

        {/* Progress Bar */}
        <div className="flex gap-2 mb-10">
          <div className="h-1 w-full bg-brand-primary rounded-full" />
          <div className="h-1 w-full bg-brand-primary rounded-full" />
          <div className="h-1 w-full bg-gray-200 rounded-full" />
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <SocialButton text="Continue with Google" logoType={'google'} />
          <SocialButton variant="primary" text="Continue with Apple" logoType={'apple'} />
          <SocialButton text="Continue As Guest" icon={<User size={20} className="text-gray-500" />} />
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Already have an account? <Link href={'/login-page'}><span className="text-brand-dark font-bold cursor-pointer">Log in</span></Link>
        </p>
      </div>
    </main>
  );
}