'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ThumbsUp, MessageCircle, X } from 'lucide-react';
import StarRating from './starRating';

const ReviewCard = ({ review, index }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
  <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.1 }}
  className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 w-full max-w-[95%] md:max-w-lg mx-auto"
>
  {/* User Info Section */}
  <div className="flex flex-wrap justify-between items-start gap-3 mb-3 sm:mb-4">
    <div className="flex items-center gap-3 flex-1">
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 flex items-center justify-center">
        <span className="text-base sm:text-lg font-semibold text-gray-600">
          {review.username.charAt(0).toUpperCase()}
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-gray-900 text-sm sm:text-base break-words max-w-full">
          {review.username}
        </h4>
        <div className="flex items-center gap-2 flex-wrap text-gray-500">
          <StarRating rating={review.ratings} size="sm" />
          <span className="text-xs sm:text-sm">
            {!isNaN(new Date(review.createdAt))
              ? new Date(review.createdAt).toLocaleDateString()
              : new Date(review.date).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
    <div className="flex gap-2">
      <button className="text-gray-500 hover:text-blue-500 transition-colors flex-shrink-0">
        <ThumbsUp className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button className="text-gray-500 hover:text-blue-500 transition-colors flex-shrink-0">
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 sm:hidden" />
      </button>
    </div>
  </div>

  {/* Feedback Text */}
  <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base break-words">
    {review.feedback}
  </p>

  {/* Images Section */}
  {review.images && review.images.length > 0 && (
    <div
      className="flex gap-2 overflow-x-auto pb-2"
      style={{
        overflowX: "scroll",
        WebkitOverflowScrolling: "touch",
      }}
    >
      {review.images.map((image, idx) => (
        <div
          key={idx}
          className="relative flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border border-gray-200 cursor-pointer"
          onClick={() => handleImageClick(image.url)}
        >
          <Image
            src={image.url}
            alt={`Review image ${idx + 1}`}
            width={100}
            height={100}
            className="object-contain w-full h-full"
          />
        </div>
      ))}
    </div>
  )}

  {/* Verified Purchase Badge */}
  {review.purchaseVerified && (
    <div className="mt-2">
      {/* <span className="bg-green-100 text-green-800 text-xs px-2.5 py-0.5 rounded-full">
        Verified Purchase
      </span> */}
    </div>
  )}
</motion.div>

      {/* Modal for Fullscreen Image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative max-w-full max-h-full">
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={closeModal}
              aria-label="Close"
            >
              <X />
            </button>
            <Image
              src={selectedImage}
              alt="Fullscreen Review Image"
              width={800}
              height={800}
              className="object-contain max-w-full max-h-screen"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ReviewCard;
