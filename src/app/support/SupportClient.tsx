
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
                                    transition={{ duration: 0.6 }}
                                    className="support-header"
                              >
                                    <h1 className="support-title">Support</h1>
                                    <p className="support-subtitle">We're here to help.</p>
                                    <p className="support-description">
                                          Reach out and we'll get back to you as soon as possible!
                                    </p>
                              </motion.div>

                              {/* Contact Options */}
                              <div className="support-cards">
                                    {/* Email Card */}
                                    <motion.div
                                          initial={{ opacity: 0, x: -30 }}
                                          whileInView={{ opacity: 1, x: 0 }}
                                          transition={{ delay: 0.1 }}
                                          className="support-card"
                                    >
                                          <div className="flex items-center gap-4 mb-8">
                                                <div className="support-icon-wrapper">
                                                      <Mail className="w-8 h-8 text-primary" />
                                                </div>
                                                <h2 className="support-card-title">Email Support</h2>
                                          </div>

                                          <p className="support-card-text">
                                                Have a question about your game, account, or need technical help?
                                                Send us a detailed email and our support team will reply within 24-48 hours.
                                          </p>

                                          <a
                                                href="mailto:support@keshavagames.net"
                                                className="support-email-btn"
                                          >
                                                Send Email to support@keshavagames.net
                                          </a>
                                    </motion.div>

                                    {/* Facebook Card */}
                                    <motion.div
                                          initial={{ opacity: 0, x: 30 }}
                                          whileInView={{ opacity: 1, x: 0 }}
                                          transition={{ delay: 0.2 }}
                                          className="support-card"
                                    >
                                          <div className="flex items-center gap-4 mb-8">
                                                <div className="support-icon-wrapper">
                                                      <MessageCircle className="w-8 h-8 text-primary" />
                                                </div>
                                                <h2 className="support-card-title">Live Chat on Facebook</h2>
                                          </div>

                                          <p className="support-card-text">
                                                Need faster help? Chat with our support team directly via Facebook Messenger.
                                                This is the quickest way to resolve issues during business hours.
                                          </p>

                                          <a
                                                href="https://facebook.com/keshavagames"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="support-facebook-btn"
                                          >
                                                Message Us on Facebook →
                                          </a>
                                    </motion.div>
                              </div>

                              {/* Extra Help Section */}
                              <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="support-extra"
                              >
                                    <p className="support-extra-text">
                                          You can also check our{" "}
                                          <Link href="/gamesList" className="text-primary underline hover:text-[#9f1ea8]">
                                                Games page
                                          </Link>{" "}
                                          or visit the{" "}
                                          <Link href="/faq" className="text-primary underline hover:text-[#9f1ea8]">
                                                FAQ
                                          </Link>{" "}
                                          (coming soon).
                                    </p>

                                    <div className="support-extra-emoji">🎮</div>
                                    <p className="support-extra-message">
                                          Have fun playing your games!
                                    </p>
                              </motion.div>
                        </div>
                  </main>

                  <Footer />
            </>
      );
}