"use client";
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
        <p className="text-sm">
          Follow us on:
          <a href="#" className="text-blue-400 hover:underline"> Facebook </a> | 
          <a href="#" className="text-blue-400 hover:underline"> Twitter </a> | 
          <a href="#" className="text-blue-400 hover:underline"> LinkedIn </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer; 