// app/support/SupportClient.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import "./support.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SupportClient() {
  return (
      <>
      <Navbar />
    <main className="support-page">
      <div className="support-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="support-header"
        >
          <h1 className="support-title">Support</h1>
          <p className="support-subtitle">We're here to help you</p>
          <p className="support-description">
            Reach out and we'll get back to you as soon as possible!
          </p>
        </motion.div>

        {/* Contact Cards - Fully Responsive */}
        <div className="support-cards">
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="support-card"
          >
            <div className="support-icon">
              <Mail size={36} />
            </div>
            <h2 className="support-card-title">Email Support</h2>
            <p className="support-card-text">
              Send us a detailed email about your issue. 
              Our team usually replies within 24-48 hours.
            </p>
            <a href="mailto:support@keshwagames.com" className="support-email-btn">
              Send Email
            </a>
          </motion.div>

          {/* Facebook Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="support-card"
          >
            <div className="support-icon">
              <MessageCircle size={36} />
            </div>
            <h2 className="support-card-title">Live Chat</h2>
            <p className="support-card-text">
              Need faster help? Chat with us directly on Facebook Messenger.
            </p>
            <a 
              href="https://facebook.com/keshwagames" 
              target="_blank"
              rel="noopener noreferrer"
              className="support-facebook-btn"
            >
              Message on Facebook
            </a>
          </motion.div>
        </div>

        {/* Extra Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="support-extra"
        >
          <p className="support-extra-text">
            You can also check our{" "}
            <Link href="/games" className="support-link">Games</Link>{" "}
            or visit the FAQ (coming soon).
          </p>
          <div className="support-extra-emoji">🎮</div>
          <p className="support-extra-message">Thank you for playing Keshwa Games!</p>
        </motion.div>
      </div>
    </main>
    <Footer />
    </>
  );
}