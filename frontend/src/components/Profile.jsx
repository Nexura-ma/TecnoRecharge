'use client';
import React, { useState } from 'react';
import Link from 'next/link';

// --- Mock Data ---
const user = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  avatar: '/user.png',
  joinDate: 'January 17, 2026',
};

const orders = [
  { id: '12345', date: '2026-01-15', total: '$25.00', status: 'Delivered', items: ['PlayStation Store Card $25'], image: '/playstation-bg.png' },
  { id: '12346', date: '2026-01-10', total: '$50.00', status: 'Delivered', items: ['Xbox Game Pass Ultimate - 3 Months'], image: '/xbox-bg.png' },
  { id: '12347', date: '2025-12-28', total: '$10.00', status: 'Delivered', items: ['Netflix Gift Card $10'], image: '/entertainment-bg.jpg' },
  { id: '12348', date: '2025-12-20', total: '$100.00', status: 'Pending', items: ['Steam Wallet Code $100'], image: '/gaming-bg.jpg' },
];

// --- SVG Icons ---
const ProfileIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>;
const OrdersIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>;
const SettingsIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>;
const ShoppingCartIcon = () => <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const DollarSignIcon = () => <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8v1m0 6v1m6-4.5c1.657 0 3 .895 3 2s-1.343 2-3 2-3 .895-3 2m0-8v1m0 6v1M6 12h.01M6 6h.01" /></svg>;

// --- Sub-components ---
const AccountDetails = () => {
    const totalOrders = orders.length;
    const totalSpent = orders.reduce((acc, order) => acc + parseFloat(order.total.replace('$', '')), 0).toFixed(2);

    return (
        <div className="space-y-8 animate-fade-in">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Total Orders Widget */}
                <div className="bg-blue-50 rounded-xl p-4 flex items-center shadow-sm">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                        <ShoppingCartIcon />
                    </div>
                    <div>
                        <p className="text-sm text-slate-500 font-medium">Total Orders</p>
                        <p className="text-xl font-bold text-blue-900">{totalOrders}</p>
                    </div>
                </div>
                {/* Total Spent Widget */}
                <div className="bg-green-50 rounded-xl p-4 flex items-center shadow-sm">
                    <div className="p-3 bg-green-100 rounded-lg mr-4">
                        <DollarSignIcon />
                    </div>
                    <div>
                        <p className="text-sm text-slate-500 font-medium">Total Spent</p>
                        <p className="text-xl font-bold text-blue-900">${totalSpent}</p>
                    </div>
                </div>
            </div>

            {/* Account Info */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Account Information</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <label className="w-1/3 text-sm font-bold text-slate-500">Full Name</label>
                  <p className="w-2/3 text-slate-800 font-medium">{user.name}</p>
                </div>
                <div className="flex items-center">
                  <label className="w-1/3 text-sm font-bold text-slate-500">Email Address</label>
                  <p className="w-2/3 text-slate-800 font-medium">{user.email}</p>
                </div>
                <div className="flex items-center">
                  <label className="w-1/3 text-sm font-bold text-slate-500">Joined Date</label>
                  <p className="w-2/3 text-slate-800 font-medium">{user.joinDate}</p>
                </div>
              </div>
            </div>
        </div>
    );
};

const OrderHistory = () => (
  <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
    <h2 className="text-2xl font-bold text-blue-900 mb-6">Order History</h2>
    <div className="space-y-4">
      {orders.map(order => (
        <div key={order.id} className="border border-slate-200 rounded-lg p-4 flex items-center space-x-4 hover:bg-slate-50 transition">
          <img src={order.image} alt={order.items[0]} className="w-16 h-16 rounded-lg object-cover hidden sm:block"/>
          <div className="flex-grow">
            <p className="font-bold text-blue-900">Order #{order.id}</p>
            <p className="text-sm text-slate-500">{new Date(order.date).toLocaleDateString()}</p>
            <p className="text-sm text-slate-600 font-medium">{order.items.join(', ')}</p>
          </div>
          <div className="text-right">
            <p className="font-bold text-xl text-slate-800">{order.total}</p>
            <span className={`text-xs font-bold px-2 py-1 rounded-full ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>{order.status}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Settings = () => (
    <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Settings</h2>
        <div className="space-y-4">
            <div className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition">
                <h3 className="font-bold text-slate-800">Change Password</h3>
                <p className="text-sm text-slate-500">Update your password to keep your account secure.</p>
                <button className="mt-2 text-sm font-bold text-blue-600 hover:underline">Update</button>
            </div>
            <div className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition">
                <h3 className="font-bold text-slate-800">Update Profile</h3>
                <p className="text-sm text-slate-500">Edit your name, email, and avatar.</p>
                <button className="mt-2 text-sm font-bold text-blue-600 hover:underline">Edit</button>
            </div>
            <div className="p-4 border border-red-200 rounded-lg hover:bg-red-50 transition">
                <h3 className="font-bold text-red-600">Delete Account</h3>
                <p className="text-sm text-red-500">Permanently delete your account and all associated data.</p>
                <button className="mt-2 text-sm font-bold text-red-600 hover:underline">Delete</button>
            </div>
        </div>
    </div>
);


// --- Main Component ---
export default function Profile() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <main className="bg-slate-100 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Profile Header */}
        <header className="bg-white rounded-2xl shadow-lg p-6 mb-8 flex flex-col sm:flex-row items-center">
          <img src={user.avatar} alt="User Avatar" className="w-24 h-24 rounded-full mr-0 sm:mr-6 mb-4 sm:mb-0 border-4 border-blue-500"/>
          <div className="text-center sm:text-left flex-grow">
            <h1 className="text-3xl font-bold text-blue-900">{user.name}</h1>
            <p className="text-slate-500">Joined on {user.joinDate}</p>
          </div>
          <button className="mt-4 sm:mt-0 bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition">
            Logout
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Column: Tab Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-4 space-y-2">
              <button onClick={() => setActiveTab('profile')} className={`w-full text-left flex items-center space-x-3 p-3 rounded-lg font-semibold transition ${activeTab === 'profile' ? 'bg-blue-50 text-blue-700' : 'hover:bg-slate-50'}`}>
                <ProfileIcon />
                <span>Profile</span>
              </button>
              <button onClick={() => setActiveTab('orders')} className={`w-full text-left flex items-center space-x-3 p-3 rounded-lg font-semibold transition ${activeTab === 'orders' ? 'bg-blue-50 text-blue-700' : 'hover:bg-slate-50'}`}>
                <OrdersIcon />
                <span>My Orders</span>
              </button>
              <button onClick={() => setActiveTab('settings')} className={`w-full text-left flex items-center space-x-3 p-3 rounded-lg font-semibold transition ${activeTab === 'settings' ? 'bg-blue-50 text-blue-700' : 'hover:bg-slate-50'}`}>
                <SettingsIcon />
                <span>Settings</span>
              </button>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-3">
            {activeTab === 'profile' && <AccountDetails />}
            {activeTab === 'orders' && <OrderHistory />}
            {activeTab === 'settings' && <Settings />}
          </div>
        </div>
      </div>
    </main>
  );
}

