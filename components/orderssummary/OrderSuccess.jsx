import { useState } from 'react';
import { motion } from 'framer-motion';
import './ordersuccess.css';

function CheckmarkSVG() {
  return (
    <motion.svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      initial="hidden"
      animate="visible"
      className="checkmark"
    >
      {/* Circle */}
      <motion.circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        strokeWidth="4"
        stroke="#4CAF50"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      {/* Checkmark */}
      <motion.path
        d="M30 50 L45 65 L70 35"
        fill="none"
        strokeWidth="4"
        stroke="#4CAF50"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}

function OrderSuccess() {
  const handleContinueShopping = () => {
    // Reset the page or perform any other action
    window.location.reload();
  };

  return (
    <motion.div 
      className="order-success"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="success-animation">
        <CheckmarkSVG />
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="success-title"
      >
        Order Placed Successfully!
      </motion.h2>
      <motion.div
        className="success-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <p className="success-message">Thank you for shopping with us.</p>
        <p className="order-message">
          Your order will be delivered soon.
          <br />
          You will receive an email confirmation shortly.
        </p>
        <motion.button 
          className="continue-shopping"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleContinueShopping}
        >
          Continue Shopping
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default OrderSuccess;