'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { register } from '../api/auth.api';

export default function Register() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleNext = () => {
    // Here you could add validation for the first step
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match.");
      return;
    }
    
    setLoading(true);
    try {
      const { confirmPassword, ...registerData } = formData;
      const data = await register(registerData);
      localStorage.setItem('token', data.access_token);
      router.push('/');
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred during registration');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <main className="min-h-screen flex items-center justify-center bg-blue-50 p-4">
      <div className="w-full max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl flex overflow-hidden h-[700px]">
        
                {/* Right side with the registration form */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
                  <div className="flex-grow"> {/* This wrapper will take available space */}
                    <div className="text-center mb-8">
                      <img src="/Logo_2.png" alt="Logo" className="w-32 mx-auto mb-4"/>
                      <h2 className="text-3xl font-bold text-blue-900">Sign Up</h2>
                      <p className="text-slate-500">
                        {step === 1 ? 'Enter your details to create an account.' : 'Set up a secure password.'}
                      </p>
                    </div>

                    {error && (
                      <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded text-sm text-center">
                        {error}
                      </div>
                    )}
        
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      {step === 1 ? (
                        <>
                          <div>
                            <label htmlFor="firstName" className="block text-sm font-bold text-slate-700 mb-2">
                              First Name
                            </label>
                            <input
                              id="firstName"
                              name="firstName"
                              type="text"
                              autoComplete="given-name"
                              required
                              className="w-full px-4 py-3 rounded-md bg-slate-100 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                              placeholder="Your First Name"
                              value={formData.firstName}
                              onChange={handleChange}
                            />
                          </div>
        
                          <div>
                            <label htmlFor="lastName" className="block text-sm font-bold text-slate-700 mb-2">
                              Last Name
                            </label>
                            <input
                              id="lastName"
                              name="lastName"
                              type="text"
                              autoComplete="family-name"
                              required
                              className="w-full px-4 py-3 rounded-md bg-slate-100 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                              placeholder="Your Last Name"
                              value={formData.lastName}
                              onChange={handleChange}
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">
                              Email Address
                            </label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              autoComplete="email"
                              required
                              className="w-full px-4 py-3 rounded-md bg-slate-100 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                              placeholder="you@example.com"
                              value={formData.email}
                              onChange={handleChange}
                            />
                          </div>
        
                          <div>
                            <button
                              type="button"
                              onClick={handleNext}
                              className="w-full bg-blue-800 text-white px-8 py-3 rounded-md shadow-lg font-bold hover:bg-blue-700 transition transform hover:scale-105"
                            >
                              Suivant
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          <div>
                            <label htmlFor="password" className="block text-sm font-bold text-slate-700 mb-2">
                              Password
                            </label>
                            <input
                              id="password"
                              name="password"
                              type="password"
                              autoComplete="new-password"
                              required
                              className="w-full px-4 py-3 rounded-md bg-slate-100 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                              placeholder="••••••••"
                              value={formData.password}
                              onChange={handleChange}
                            />
                          </div>
        
                          <div>
                            <label htmlFor="confirm-password" className="block text-sm font-bold text-slate-700 mb-2">
                              Confirm Password
                            </label>
                            <input
                              id="confirm-password"
                              name="confirmPassword"
                              type="password"
                              autoComplete="new-password"
                              required
                              className="w-full px-4 py-3 rounded-md bg-slate-100 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                              placeholder="••••••••"
                              value={formData.confirmPassword}
                              onChange={handleChange}
                            />
                          </div>
        
                          <div className="flex items-center gap-4">
                            <button
                              type="button"
                              onClick={handleBack}
                              disabled={loading}
                              className="w-full bg-slate-200 text-slate-800 px-8 py-3 rounded-md shadow-lg font-bold hover:bg-slate-300 transition disabled:opacity-50"
                            >
                              Back
                            </button>
                            <button
                              type="submit"
                              disabled={loading}
                              className={`w-full bg-blue-800 text-white px-8 py-3 rounded-md shadow-lg font-bold hover:bg-blue-700 transition transform hover:scale-105 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                              {loading ? 'Signing Up...' : 'Sign Up'}
                            </button>
                          </div>
                        </>
                      )}
                    </form>
                  </div> {/* End of flex-grow wrapper */}
        
                  <div className="mt-8 text-center">
                    <p className="text-sm text-slate-600">
                      Already have an account?{' '}
                      <Link href="/login" className="font-medium text-blue-600 hover:underline">
                        Sign In
                      </Link>
                    </p>
                  </div>
                </div>        
        {/* Left side with background image and text */}
        <div className="hidden md:flex w-1/2 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/login.png')" }}>
          <div className="flex flex-col justify-between h-full p-8 text-white">
            <div>
              <h1 className="text-4xl font-bold leading-tight">Welcome!</h1>
              <p className="mt-4 text-lg">
                Create your account to manage your digital codes and enjoy seamless recharges.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}