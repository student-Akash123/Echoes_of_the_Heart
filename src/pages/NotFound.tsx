import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen galaxy-bg flex items-center justify-center relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-stellar-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* 404 with cosmic styling */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold bg-stellar-gradient bg-clip-text text-transparent animate-stellar-pulse">
              404
            </h1>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="w-2 h-2 rounded-full bg-emotions-sadness animate-twinkle" />
              <div className="w-3 h-3 rounded-full bg-emotions-longing animate-twinkle" style={{ animationDelay: '0.5s' }} />
              <div className="w-2 h-2 rounded-full bg-emotions-hope animate-twinkle" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-stellar-white mb-4">
              Lost in the Cosmic Void
            </h2>
            <p className="text-lg text-nebula-mist max-w-md mx-auto mb-2">
              This star seems to have drifted too far from our galaxy
            </p>
            <p className="text-sm text-nebula-mist/70">
              The path <code className="bg-space-surface px-2 py-1 rounded text-emotions-hope">{location.pathname}</code> doesn't exist in our emotional universe
            </p>
          </motion.div>

          {/* Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Button
              onClick={() => window.location.href = '/'}
              className="bg-gradient-to-r from-emotions-hope to-emotions-passion hover:scale-105 transition-all duration-300 glow-hope px-8 py-3"
            >
              <Home className="w-5 h-5 mr-2" />
              Return to the Galaxy
            </Button>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 flex items-center justify-center gap-4 text-nebula-mist/50"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-xs">Navigate back to explore emotional constellations</span>
            <Sparkles className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>

      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emotions-sadness/10 rounded-full blur-3xl animate-stellar-pulse" />
    </div>
  );
};

export default NotFound;