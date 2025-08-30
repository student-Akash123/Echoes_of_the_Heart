import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Moon, Flame, Droplets } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export type EmotionType = 'joy' | 'hope' | 'longing' | 'passion' | 'sadness' | 'all';

interface ConstellationSidebarProps {
  selectedEmotion: EmotionType;
  onEmotionSelect: (emotion: EmotionType) => void;
  emotionCounts: Record<EmotionType, number>;
}

const constellations = [
  {
    id: 'all' as const,
    name: 'All Stars',
    icon: Sparkles,
    description: 'The complete emotional universe',
    gradient: 'from-stellar-white to-cosmic-silver'
  },
  {
    id: 'joy' as const,
    name: 'Aurum',
    icon: Sparkles,
    description: 'Constellation of Joy & Happiness',
    gradient: 'from-emotions-joy to-yellow-300'
  },
  {
    id: 'hope' as const,
    name: 'Aquarius',
    icon: Heart,
    description: 'Waters of Hope & Dreams',
    gradient: 'from-emotions-hope to-cyan-300'
  },
  {
    id: 'longing' as const,
    name: 'Violeta',
    icon: Moon,
    description: 'Deep Longing & Yearning',
    gradient: 'from-emotions-longing to-purple-300'
  },
  {
    id: 'passion' as const,
    name: 'Ignis',
    icon: Flame,
    description: 'Fires of Passion & Love',
    gradient: 'from-emotions-passion to-pink-300'
  },
  {
    id: 'sadness' as const,
    name: 'Lacuna',
    icon: Droplets,
    description: 'Ocean of Tears & Reflection',
    gradient: 'from-emotions-sadness to-blue-300'
  }
];

export function ConstellationSidebar({ selectedEmotion, onEmotionSelect, emotionCounts }: ConstellationSidebarProps) {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-20 w-80">
      <Card className="glass-cosmic p-6 border-cosmic-border">
        <div className="space-y-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold bg-stellar-gradient bg-clip-text text-transparent">
              Constellation Map
            </h2>
            <p className="text-nebula-mist text-sm mt-2">
              Navigate the emotional cosmos
            </p>
          </div>

          <div className="space-y-3">
            {constellations.map((constellation, index) => {
              const Icon = constellation.icon;
              const isSelected = selectedEmotion === constellation.id;
              const count = emotionCounts[constellation.id] || 0;

              return (
                <motion.div
                  key={constellation.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Button
                    variant={isSelected ? "default" : "ghost"}
                    onClick={() => onEmotionSelect(constellation.id)}
                    className={`
                      w-full p-4 h-auto justify-start text-left transition-all duration-300
                      ${isSelected 
                        ? `bg-gradient-to-r ${constellation.gradient} text-space-void shadow-lg glow-${constellation.id === 'all' ? 'hope' : constellation.id}` 
                        : 'hover:bg-space-nebula/50 text-stellar-white hover:scale-105'
                      }
                    `}
                  >
                    <div className="flex items-center gap-3 w-full">
                      <div className={`p-2 rounded-full ${isSelected ? 'bg-white/20' : 'bg-space-surface'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">{constellation.name}</h3>
                          <span className="text-xs bg-space-surface px-2 py-1 rounded-full">
                            {count}
                          </span>
                        </div>
                        <p className={`text-xs mt-1 ${isSelected ? 'text-space-deep/70' : 'text-nebula-mist'}`}>
                          {constellation.description}
                        </p>
                      </div>
                    </div>
                  </Button>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-cosmic-border">
            <div className="text-center">
              <div className="text-2xl font-bold text-stellar-white">
                {emotionCounts.all || 0}
              </div>
              <div className="text-xs text-nebula-mist">
                Total stars in the cosmos
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}