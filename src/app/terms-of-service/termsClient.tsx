"use client";

import { motion } from "framer-motion";
import "./terms.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function TermsOfServiceClient() {
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
                                    <h1 className="legal-title">Terms & Conditions</h1>
                                    <p className="legal-date">Last modified: April 10, 2026</p>
                              </motion.div>

                              <div className="legal-content">
                                    <p className="legal-intro">
                                          These Terms of Service ("Terms") govern your use of Keshava Games services, including our website and mobile games.
                                    </p>

                                    <h2 className="legal-section-title">1. Agreement to Terms</h2>
                                    <p className="legal-text">
                                          By using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, please do not use our Services.
                                    </p>

                                    <h2 className="legal-section-title">2. Changes to Terms</h2>
                                    <p className="legal-text">
                                          We may update these Terms from time to time. Continued use of the Services after changes constitutes your acceptance of the new Terms.
                                    </p>

                                    <h2 className="legal-section-title">3. Limited License</h2>
                                    <p className="legal-text">
                                          We grant you a limited, non-exclusive license to use our games and website for personal entertainment purposes only.
                                    </p>

                                    <h2 className="legal-section-title">4. Intellectual Property</h2>
                                    <p className="legal-text">
                                          All content, games, and technology are owned by Keshava Games or its licensors. You may not copy, modify, or distribute them without permission.
                                    </p>

                                    <h2 className="legal-section-title">5. User Conduct</h2>
                                    <p className="legal-text">
                                          You agree not to harass other players, use cheating tools, or engage in any harmful behavior while using our Services.
                                    </p>

                                    {/* Add more sections as needed */}
                              </div>
                        </div>
                  </main>
                  <Footer />
            </>
      );
}