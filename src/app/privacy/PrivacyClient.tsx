"use client";

import { motion } from "framer-motion";
import "./privacy.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicyClient() {
      return (
            <>
                  <Navbar />
                  <main className="legal-page">
                        <div className="legal-container">
                              <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="legal-header"
                              >
                                    <h1 className="legal-title">Privacy Policy</h1>
                                    <p className="legal-date">Last modified: April 10, 2026</p>
                              </motion.div>

                              <div className="legal-content">
                                    <p className="legal-intro">
                                          Keshava Games respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our games and website.
                                    </p>

                                    <h2 className="legal-section-title">Information We Collect</h2>
                                    <p className="legal-text">
                                          We collect technical information such as device type, IP address, and gameplay data to improve our services and show relevant ads.
                                    </p>

                                    <h2 className="legal-section-title">How We Use Your Information</h2>
                                    <p className="legal-text">
                                          We use your information to provide and improve our games, deliver personalized ads, and respond to your support requests.
                                    </p>

                                    <h2 className="legal-section-title">Third Party Advertising</h2>
                                    <p className="legal-text">
                                          We work with third-party advertising companies that may collect data to show you relevant advertisements.
                                    </p>

                                    <h2 className="legal-section-title">Your Rights</h2>
                                    <p className="legal-text">
                                          You have the right to access, update, or delete your personal information. Contact us at support@keshavagames.net for any privacy concerns.
                                    </p>
                              </div>
                        </div>
                  </main>
                  <Footer />
            </>
      );
}