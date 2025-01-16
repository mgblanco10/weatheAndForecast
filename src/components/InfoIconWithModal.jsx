/* eslint-disable react/prop-types */
import { useState } from "react";

export default function InfoIconWithModal({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="ml-2 text-blue-600 rounded-full hover:bg-blue-200 focus:outline-none focus:ring focus:ring-blue-300"
        aria-label={`More information about ${title}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-sm p-6 bg-white rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="mb-4 text-lg font-bold text-blue-600">{title}</h2>
            <p className="mb-4 text-gray-700">{content}</p>
            <button
              onClick={closeModal}
              className="w-full px-3 py-2 text-blue-700 transition-colors bg-blue-200 rounded-lg hover:bg-blue-300 focus:outline-none focus:ring focus:ring-blue-400"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
