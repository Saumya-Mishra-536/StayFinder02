'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulate API call - replace with your actual login logic
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Example: redirect to dashboard after successful login
      // router.push('/dashboard');
      
      alert('Login successful!');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    // Handle social login logic here
    console.log(`Login with ${provider}`);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          {/* Logo/Brand */}
          <div className="text-center mb-8">
          
            <h1 className="text-3xl font-black text-white-900 mb-2">Welcome Back</h1>
            <p className="text-gray-600 font-medium">Sign in to your account to continue</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-white-700 mb-2 uppercase tracking-wide">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="appearance-none block w-full px-4 py-3 border-2 border-gray-200 rounded-xl placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 font-medium"
                placeholder="Enter your email"
                autoComplete="email"
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-bold text-white-700 mb-2 uppercase tracking-wide">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="appearance-none block w-full px-4 py-3 pr-12 border-2 border-white-200 rounded-xl placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 font-medium"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-lg hover:text-gray-600 transition-colors"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm font-medium text-gray-700">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <Link 
                  href="/forgot-password" 
                  className="font-semibold text-blue-600 hover:text-blue-500 transition-colors"
                >
                  Forgot password? 
                </Link>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-black rounded-xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl uppercase tracking-wide"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <span className="mr-2 animate-spin"></span>
                    Signing In...
                  </div>
                ) : (
                  <>
                    Sign In
                  </>
                )}
              </button>
            </div>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500 font-medium"> Or continue with </span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => handleSocialLogin('Google')}
                className="w-full inline-flex justify-center py-3 px-4 border-2 border-gray-200 rounded-xl shadow-sm bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
              >
                <span className="text-lg mr-2">🌐</span>
                Google
              </button>

              <button
                type="button"
                onClick={() => handleSocialLogin('Apple')}
                className="w-full inline-flex justify-center py-3 px-4 border-2 border-gray-200 rounded-xl shadow-sm bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
              >Apple
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-sm font-medium text-gray-600">
                Don't have an account? {' '}
                <Link 
                  href="/signup" 
                  className="font-bold text-blue-600 hover:text-blue-500 transition-colors"
                >
                  Sign up for free! 
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Right Side - Background Pattern */}
      <div className="hidden lg:block relative w-0 flex-1">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
          {/* Simple Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-8 gap-4 h-full p-8">
              {[...Array(64)].map((_, i) => (
                <div 
                  key={i} 
                  className="bg-white rounded-lg opacity-30 animate-pulse"
                  style={{animationDelay: `${i * 100}ms`}}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Content Overlay */}
          <div className="relative h-full flex items-center justify-center p-12">
            <div className="text-center">
              <div className="text-8xl mb-6">🏠</div>
              <h2 className="text-4xl font-black text-white mb-6">
                Join Our Community
              </h2>
              <p className="text-xl text-blue-100 font-medium max-w-md mx-auto leading-relaxed mb-8">
                Connect with thousands of users and discover amazing experiences with StayFinder.
              </p>
              <div className="flex justify-center space-x-2 text-2xl">

                <span className="animate-bounce" style={{animationDelay: '0.4s'}}>🌟</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}