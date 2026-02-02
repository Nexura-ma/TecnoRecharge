'use client';
import React, { useState, useEffect, useRef } from 'react';

const languages = [
  { code: 'FR', label: 'Français', flag: '🇫🇷' },
  { code: 'EN', label: 'English', flag: '🇺🇸' },
  { code: 'ES', label: 'Español', flag: '🇪🇸' },
];

export default function LanguageSelector({ align = 'right' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[1]); // Default to English
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (lang) => {
    setSelectedLang(lang);
    setIsOpen(false);
    // Here you would typically trigger a global language change
    console.log(`Language switched to ${lang.code}`);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative z-50" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-1 text-white hover:text-yellow-400 transition-colors duration-200 font-bold focus:outline-none"
      >
        <span className="text-xl">{selectedLang.flag}</span>
        <span className="hidden sm:inline-block">{selectedLang.code}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className={`absolute ${align === 'right' ? 'right-0' : 'left-0'} mt-2 w-40 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden`}>
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => selectLanguage(lang)}
                className={`w-full text-left px-4 py-2 text-sm flex items-center space-x-3 hover:bg-gray-100 transition-colors ${
                  selectedLang.code === lang.code ? 'bg-blue-50 text-blue-900 font-bold' : 'text-gray-700'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
