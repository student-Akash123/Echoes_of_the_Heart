import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail, Globe, Shield, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CosmicFooter() {
  return (
    <footer className="relative bg-space-void/50 border-t border-cosmic-border backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emotions-hope to-emotions-passion p-0.5">
                <div className="w-full h-full rounded-full bg-space-void flex items-center justify-center">
                  <Heart className="w-4 h-4 text-emotions-passion animate-stellar-pulse" />
                </div>
              </div>
              <h3 className="text-lg font-bold bg-stellar-gradient bg-clip-text text-transparent">
                Echoes of the Heart
              </h3>
            </div>
            <p className="text-nebula-mist text-sm leading-relaxed mb-4">
              A global emotional network where human feelings become stars in an infinite digital cosmos. 
              Share your heart, connect with others, and discover the beautiful tapestry of human emotion.
            </p>
            <div className="flex items-center gap-4 text-nebula-mist text-sm">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>Anonymous & Safe</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Privacy Protected</span>
              </div>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold text-stellar-white mb-4">Explore</h4>
            <nav className="space-y-2">
              <Link 
                to="/about" 
                className="block text-nebula-mist hover:text-emotions-hope transition-colors text-sm"
              >
                About Us
              </Link>
              <Link 
                to="/" 
                className="block text-nebula-mist hover:text-emotions-hope transition-colors text-sm"
              >
                Galaxy View
              </Link>
              <a 
                href="mailto:hello@echoesoftheheart.com"
                className="block text-nebula-mist hover:text-emotions-hope transition-colors text-sm"
              >
                Contact Us
              </a>
            </nav>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold text-stellar-white mb-4">Legal</h4>
            <nav className="space-y-2">
              <Link 
                to="/privacy" 
                className="block text-nebula-mist hover:text-emotions-hope transition-colors text-sm flex items-center gap-2"
              >
                <Shield className="w-3 h-3" />
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="block text-nebula-mist hover:text-emotions-hope transition-colors text-sm flex items-center gap-2"
              >
                <FileText className="w-3 h-3" />
                Terms of Service
              </Link>
            </nav>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-6 border-t border-cosmic-border text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-nebula-mist text-sm">
              © {new Date().getFullYear()} Echoes of the Heart. Made with cosmic love for humanity.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="mailto:hello@echoesoftheheart.com"
                className="text-nebula-mist hover:text-emotions-hope transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <div className="text-nebula-mist text-sm">
                Building emotional connections across the cosmos
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-4 right-12 w-1 h-1 bg-emotions-hope rounded-full animate-twinkle"></div>
        <div className="absolute bottom-8 left-16 w-1 h-1 bg-emotions-joy rounded-full animate-twinkle" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-12 left-1/3 w-1 h-1 bg-emotions-passion rounded-full animate-twinkle" style={{animationDelay: '2s'}}></div>
      </div>
    </footer>
  );
}