import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Clock, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface EmotionData {
  id: string;
  emotion: 'joy' | 'hope' | 'longing' | 'passion' | 'sadness';
  message: string;
  excerpt: string;
  position: [number, number, number];
  timestamp: Date;
  stardustCount?: number;
}

interface StarDetailModalProps {
  star: EmotionData | null;
  onClose: () => void;
  onStardust: (starId: string) => void;
}

const emotionData = {
  joy: {
    name: 'Joy',
    color: 'text-emotions-joy',
    bgGradient: 'from-emotions-joy/20 to-transparent',
    description: 'A burst of golden light in the cosmic void'
  },
  hope: {
    name: 'Hope',
    color: 'text-emotions-hope',
    bgGradient: 'from-emotions-hope/20 to-transparent',
    description: 'A beacon of cyan dreams across the galaxy'
  },
  longing: {
    name: 'Longing',
    color: 'text-emotions-longing',
    bgGradient: 'from-emotions-longing/20 to-transparent',
    description: 'A violet whisper of deep yearning'
  },
  passion: {
    name: 'Passion',
    color: 'text-emotions-passion',
    bgGradient: 'from-emotions-passion/20 to-transparent',
    description: 'A pink flame burning bright with love'
  },
  sadness: {
    name: 'Sadness',
    color: 'text-emotions-sadness',
    bgGradient: 'from-emotions-sadness/20 to-transparent',
    description: 'A blue reflection in the cosmic ocean'
  }
};

export function StarDetailModal({ star, onClose, onStardust }: StarDetailModalProps) {
  const [stardustSent, setStardustSent] = useState(false);
  const [stardustAnimation, setStardustAnimation] = useState(false);

  if (!star) return null;

  const emotion = emotionData[star.emotion];

  const handleStardust = () => {
    if (stardustSent) return;
    
    setStardustAnimation(true);
    setStardustSent(true);
    onStardust(star.id);
    
    setTimeout(() => {
      setStardustAnimation(false);
    }, 2000);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, rotateY: -15 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          exit={{ scale: 0.9, opacity: 0, rotateY: 15 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-2xl max-h-[80vh] overflow-auto"
        >
          <Card className={`glass-cosmic border-cosmic-border p-8 bg-gradient-to-br ${emotion.bgGradient}`}>
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-4 h-4 rounded-full bg-current ${emotion.color} animate-stellar-pulse`} />
                  <h2 className={`text-2xl font-bold ${emotion.color}`}>
                    {emotion.name}
                  </h2>
                </div>
                <p className="text-nebula-mist text-sm">
                  {emotion.description}
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="text-nebula-mist hover:text-stellar-white"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Message */}
            <div className="mb-8">
              <div className="bg-space-deep/30 rounded-lg p-6 border border-cosmic-border/30">
                <p className="text-stellar-white text-lg leading-relaxed">
                  {star.message}
                </p>
              </div>
            </div>

            {/* Metadata */}
            <div className="flex items-center justify-between text-nebula-mist text-sm mb-6">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Sent to the stars on {formatDate(star.timestamp)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>{star.stardustCount || 0} stardust received</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <Button
                onClick={handleStardust}
                disabled={stardustSent}
                className={`
                  flex-1 relative overflow-hidden transition-all duration-300
                  ${stardustSent 
                    ? 'bg-space-surface text-stellar-white cursor-not-allowed' 
                    : `bg-gradient-to-r ${emotion.bgGradient} hover:scale-105 border border-current ${emotion.color}`
                  }
                `}
              >
                <AnimatePresence>
                  {stardustAnimation && (
                    <motion.div
                      initial={{ scale: 0, opacity: 1 }}
                      animate={{ scale: 20, opacity: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-stellar-white rounded-full"
                    />
                  )}
                </AnimatePresence>
                
                <div className="flex items-center gap-2 relative z-10">
                  <Sparkles className={`w-4 h-4 ${stardustAnimation ? 'animate-spin' : ''}`} />
                  {stardustSent ? 'Stardust Sent!' : 'Send Stardust'}
                </div>
              </Button>
              
              <Button
                variant="ghost"
                onClick={onClose}
                className="text-nebula-mist hover:text-stellar-white"
              >
                Close
              </Button>
            </div>

            {/* Floating stardust particles */}
            <AnimatePresence>
              {stardustAnimation && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ 
                        x: '50%', 
                        y: '50%', 
                        scale: 0,
                        opacity: 1 
                      }}
                      animate={{ 
                        x: `${Math.random() * 100}%`,
                        y: `${Math.random() * 100}%`,
                        scale: [0, 1, 0],
                        opacity: [1, 1, 0]
                      }}
                      transition={{ 
                        duration: 2,
                        delay: i * 0.1,
                        ease: "easeOut"
                      }}
                      className={`absolute w-2 h-2 rounded-full bg-current ${emotion.color}`}
                    />
                  ))}
                </div>
              )}
            </AnimatePresence>
          </Card>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}