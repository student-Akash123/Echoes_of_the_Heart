import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Globe, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CosmicHeaderProps {
  onAddEmotion: () => void;
  totalStars: number;
  globalConnections: number;
}

export function CosmicHeader({ onAddEmotion, totalStars, globalConnections }: CosmicHeaderProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-30 bg-space-void/80 backdrop-blur-md border-b border-cosmic-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emotions-hope to-emotions-passion p-0.5">
                <div className="w-full h-full rounded-full bg-space-void flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emotions-hope to-emotions-passion animate-stellar-pulse" />
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-stellar-gradient bg-clip-text text-transparent">
                Echoes of the Heart
              </h1>
              <p className="text-xs text-nebula-mist">
                A Global Emotional Network
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex items-center gap-6 text-sm"
          >
            <div className="flex items-center gap-2 text-nebula-mist">
              <div className="w-2 h-2 rounded-full bg-emotions-joy animate-twinkle" />
              <span>{Intl.NumberFormat().format(totalStars)} Stars</span>
            </div>
            <div className="flex items-center gap-2 text-nebula-mist">
              <Globe className="w-4 h-4" />
              <span>{Intl.NumberFormat().format(globalConnections)} Connected Hearts</span>
            </div>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <Button
              onClick={onAddEmotion}
              className="bg-gradient-to-r from-emotions-passion to-emotions-hope hover:scale-105 transition-all duration-300 glow-passion"
            >
              <Plus className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Share Your Heart</span>
              <span className="sm:hidden">Share</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}