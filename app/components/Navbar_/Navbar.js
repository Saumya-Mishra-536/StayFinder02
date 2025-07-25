'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '../../supabaseClient';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check initial session
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsLoggedIn(!!session);
    };
    checkSession();
    // Listen for auth changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(!!session);
    });
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsLoggedIn(false);
    window.location.href = '/';
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-indigo-500 to-indigo-200 px-6 py-4 flex items-center justify-between shadow-lg">
      <div className="text-3xl font-semibold text-white">
        <Link href="/">StayFinder</Link>
      </div>
      <div className="flex-1 flex justify-center">
        <ul className="flex space-x-8 items-center">
          <li>
            <Link href="/" className="text-white hover:text-yellow-400 transition-all duration-300 ease-in-out">Home</Link>
          </li>
          <li>
            <Link href="/ExplorePage" className="text-white hover:text-yellow-400 transition-all duration-300 ease-in-out">Explore</Link>
          </li>
          <li>
            <Link href="/AboutPage" className="text-white hover:text-yellow-400 transition-all duration-300 ease-in-out">About</Link>
          </li>
          <li>
            <Link href="/Contact" className="text-white hover:text-yellow-400 transition-all duration-300 ease-in-out">Contact</Link>
          </li>
          
        </ul>
      </div>
      <div>
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="ml-4 px-6 py-2 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition duration-300"
          >
            Logout
          </button>
        ) : (
          <Link
            href="/LoginPage"
            className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-white hover:text-blue-900 transition duration-300"
          >
          Sign Up
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;