import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Clock, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export type EmotionType = 'joy' | 'hope' | 'longing' | 'passion' | 'sadness';

interface EmotionSubmitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: {
    emotion: EmotionType;
    message: string;
    timeCapsule?: Date;
  }) => void;
}

const emotionOptions = [
  { value: 'joy', label: 'Joy', description: 'Happiness, celebration, pure bliss', color: 'text-emotions-joy' },
  { value: 'hope', label: 'Hope', description: 'Dreams, aspirations, bright futures', color: 'text-emotions-hope' },
  { value: 'longing', label: 'Longing', description: 'Yearning, missing someone, deep desire', color: 'text-emotions-longing' },
  { value: 'passion', label: 'Passion', description: 'Love, desire, intense feelings', color: 'text-emotions-passion' },
  { value: 'sadness', label: 'Sadness', description: 'Reflection, loss, melancholy', color: 'text-emotions-sadness' },
];

const timeCapsuleOptions = [
  { value: 'now', label: 'Send now', description: 'Appears immediately in the galaxy' },
  { value: '1d', label: '1 Day', description: 'Appears tomorrow' },
  { value: '1w', label: '1 Week', description: 'Appears in a week' },
  { value: '1m', label: '1 Month', description: 'Appears in a month' },
  { value: '1y', label: '1 Year', description: 'Appears in a year' },
];

export function EmotionSubmitModal({ isOpen, onClose, onSubmit }: EmotionSubmitModalProps) {
  const [emotion, setEmotion] = useState<EmotionType>('joy');
  const [message, setMessage] = useState('');
  const [timeCapsule, setTimeCapsule] = useState('now');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSubmitting(true);
    
    const timeCapsuleDate = timeCapsule && timeCapsule !== 'now' ? calculateTimeCapsuleDate(timeCapsule) : undefined;
    
    try {
      await onSubmit({
        emotion,
        message: message.trim(),
        timeCapsule: timeCapsuleDate,
      });
      
      // Reset form
      setMessage('');
      setEmotion('joy');
      setTimeCapsule('now');
      onClose();
    } catch (error) {
      console.error('Failed to submit emotion:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const calculateTimeCapsuleDate = (duration: string): Date => {
    const now = new Date();
    switch (duration) {
      case '1d': return new Date(now.getTime() + 24 * 60 * 60 * 1000);
      case '1w': return new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
      case '1m': return new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
      case '1y': return new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000);
      default: return now;
    }
  };

  const selectedEmotionData = emotionOptions.find(opt => opt.value === emotion);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg"
          >
            <Card className="glass-cosmic border-cosmic-border p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold bg-stellar-gradient bg-clip-text text-transparent">
                    Share Your Heart
                  </h2>
                  <p className="text-nebula-mist text-sm mt-1">
                    Add your emotion to the cosmic tapestry
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

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-stellar-white">Choose your emotion</Label>
                  <Select value={emotion} onValueChange={(value) => setEmotion(value as EmotionType)}>
                    <SelectTrigger className="bg-space-surface border-cosmic-border text-stellar-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-space-nebula border-cosmic-border">
                      {emotionOptions.map((option) => (
                        <SelectItem
                          key={option.value}
                          value={option.value}
                          className="text-stellar-white hover:bg-space-surface focus:bg-space-surface"
                        >
                          <div className="flex flex-col">
                            <span className={`font-semibold ${option.color}`}>
                              {option.label}
                            </span>
                            <span className="text-xs text-nebula-mist">
                              {option.description}
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-stellar-white">Your message</Label>
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share your heart, your story, your moment..."
                    className="bg-space-surface border-cosmic-border text-stellar-white placeholder:text-nebula-mist min-h-32 resize-none"
                    maxLength={500}
                    required
                  />
                  <div className="text-right text-xs text-nebula-mist">
                    {message.length}/500
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-stellar-white flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Time Capsule (Optional)
                  </Label>
                  <Select value={timeCapsule} onValueChange={setTimeCapsule}>
                    <SelectTrigger className="bg-space-surface border-cosmic-border text-stellar-white">
                      <SelectValue placeholder="Send now" />
                    </SelectTrigger>
                    <SelectContent className="bg-space-nebula border-cosmic-border">
                      {timeCapsuleOptions.map((option) => (
                        <SelectItem
                          key={option.value}
                          value={option.value}
                          className="text-stellar-white hover:bg-space-surface focus:bg-space-surface"
                        >
                          <div className="flex flex-col">
                            <span className="font-semibold">{option.label}</span>
                            <span className="text-xs text-nebula-mist">
                              {option.description}
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={onClose}
                    className="flex-1 text-nebula-mist hover:text-stellar-white"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={!message.trim() || isSubmitting}
                    className={`flex-1 bg-gradient-to-r ${selectedEmotionData?.color.replace('text-', 'from-')} to-transparent hover:scale-105 transition-all duration-300`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4" />
                        Send to Stars
                      </div>
                    )}
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}