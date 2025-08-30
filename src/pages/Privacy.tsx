import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Eye, Lock, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="min-h-screen galaxy-bg relative overflow-hidden">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-30 bg-space-void/80 backdrop-blur-md border-b border-cosmic-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" className="text-stellar-white hover:text-emotions-hope">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Galaxy
              </Button>
            </Link>
            <h1 className="text-xl font-bold bg-stellar-gradient bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <div></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-cosmic p-8 rounded-2xl border border-cosmic-border"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <Shield className="w-16 h-16 text-emotions-hope mx-auto mb-4" />
              <h2 className="text-3xl font-bold bg-stellar-gradient bg-clip-text text-transparent mb-2">
                Your Privacy Matters
              </h2>
              <p className="text-nebula-mist">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="space-y-8 text-nebula-mist">
              {/* Introduction */}
              <section>
                <h3 className="text-xl font-semibold text-stellar-white mb-4 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-emotions-joy" />
                  Introduction
                </h3>
                <p className="leading-relaxed">
                  At Echoes of the Heart, we believe in the power of anonymous emotional expression. 
                  This Privacy Policy explains how we protect your information when you use our platform 
                  to share emotions in our digital galaxy.
                </p>
              </section>

              {/* Information We Collect */}
              <section>
                <h3 className="text-xl font-semibold text-stellar-white mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-emotions-longing" />
                  Information We Collect
                </h3>
                <div className="space-y-4">
                  <div className="bg-space-void/50 p-4 rounded-lg border border-cosmic-border">
                    <h4 className="font-semibold text-stellar-white mb-2">Emotional Content</h4>
                    <p className="text-sm">
                      We collect the emotional messages you choose to share. These are stored anonymously 
                      without any personal identifiers linking them to you.
                    </p>
                  </div>
                  <div className="bg-space-void/50 p-4 rounded-lg border border-cosmic-border">
                    <h4 className="font-semibold text-stellar-white mb-2">Technical Information</h4>
                    <p className="text-sm">
                      We collect basic technical information like IP addresses, browser type, and device 
                      information for security and performance purposes only.
                    </p>
                  </div>
                  <div className="bg-space-void/50 p-4 rounded-lg border border-cosmic-border">
                    <h4 className="font-semibold text-stellar-white mb-2">Usage Analytics</h4>
                    <p className="text-sm">
                      We collect anonymous analytics about how users interact with our galaxy to improve 
                      the experience for everyone.
                    </p>
                  </div>
                </div>
              </section>

              {/* How We Protect You */}
              <section>
                <h3 className="text-xl font-semibold text-stellar-white mb-4 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-emotions-passion" />
                  How We Protect Your Privacy
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-emotions-hope mt-2"></div>
                    <span><strong>Complete Anonymity:</strong> We never collect names, emails, or personal identifiers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-emotions-joy mt-2"></div>
                    <span><strong>No User Accounts:</strong> You don't need to register or create profiles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-emotions-passion mt-2"></div>
                    <span><strong>Secure Storage:</strong> All data is encrypted and stored securely</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-emotions-longing mt-2"></div>
                    <span><strong>No Selling:</strong> We never sell, rent, or share your data with third parties</span>
                  </li>
                </ul>
              </section>

              {/* Cookies */}
              <section>
                <h3 className="text-xl font-semibold text-stellar-white mb-4">Cookies & Local Storage</h3>
                <p className="leading-relaxed">
                  We use minimal cookies and local storage only for essential functionality like 
                  remembering your constellation preferences and ensuring the site works properly. 
                  These do not track you personally.
                </p>
              </section>

              {/* Third Party Services */}
              <section>
                <h3 className="text-xl font-semibold text-stellar-white mb-4">Third-Party Services</h3>
                <p className="leading-relaxed">
                  We use select third-party services for hosting and analytics. These services are 
                  bound by their own privacy policies and receive only anonymized data necessary 
                  for their function.
                </p>
              </section>

              {/* Your Rights */}
              <section>
                <h3 className="text-xl font-semibold text-stellar-white mb-4">Your Rights</h3>
                <p className="leading-relaxed mb-3">
                  Because we operate anonymously, traditional data rights (like deletion requests) 
                  don't apply in the usual way. However, you have the right to:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• Stop using the service at any time</li>
                  <li>• Contact us with privacy concerns</li>
                  <li>• Request information about our data practices</li>
                </ul>
              </section>

              {/* Changes */}
              <section>
                <h3 className="text-xl font-semibold text-stellar-white mb-4">Changes to This Policy</h3>
                <p className="leading-relaxed">
                  We may update this privacy policy from time to time. We will notify users of any 
                  material changes by posting the new policy on this page with an updated date.
                </p>
              </section>

              {/* Contact */}
              <section>
                <h3 className="text-xl font-semibold text-stellar-white mb-4">Contact Us</h3>
                <p className="leading-relaxed">
                  If you have any questions about this Privacy Policy or our practices, please 
                  contact us through our website or email us at privacy@echoesoftheheart.com
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Privacy;