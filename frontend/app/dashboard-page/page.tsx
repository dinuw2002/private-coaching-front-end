"use client";
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [user, setUser] = useState<{ firstName: string } | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-brand-dark">
        Welcome back, {user?.firstName || 'Guest'}! 👋
      </h1>
      <p className="text-gray-500">Here is what’s happening with your coaching today.</p>
    </div>
  );
}