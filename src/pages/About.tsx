import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Globe, Users, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
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
              About Echoes of the Heart
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
            {/* Hero Section */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-20 h-20 rounded-full bg-gradient-to-r from-emotions-hope to-emotions-passion p-1 mx-auto mb-6"
              >
                <div className="w-full h-full rounded-full bg-space-void flex items-center justify-center">
                  <Heart className="w-8 h-8 text-emotions-passion animate-stellar-pulse" />
                </div>
              </motion.div>
              <h2 className="text-4xl font-bold bg-stellar-gradient bg-clip-text text-transparent mb-4">
                A Global Emotional Network
              </h2>
              <p className="text-nebula-mist text-lg leading-relaxed">
                Where human emotions become stars in an infinite digital cosmos
              </p>
            </div>

            {/* Mission */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-stellar-white mb-6 flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-emotions-hope" />
                Our Mission
              </h3>
              <p className="text-nebula-mist leading-relaxed mb-4">
                Echoes of the Heart transforms the way we share and connect through emotions. In our fast-paced digital world, 
                genuine emotional expression often gets lost. We've created a safe, anonymous space where every feeling—whether 
                joy, hope, longing, passion, or sadness—becomes a glowing star in our shared emotional galaxy.
              </p>
              <p className="text-nebula-mist leading-relaxed">
                By visualizing emotions as celestial bodies, we remind ourselves that our feelings are part of something larger—a 
                universal human experience that transcends borders, languages, and cultures.
              </p>
            </div>

            {/* How It Works */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-stellar-white mb-6 flex items-center gap-3">
                <Globe className="w-6 h-6 text-emotions-joy" />
                How It Works
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-space-void/50 p-6 rounded-lg border border-cosmic-border">
                  <h4 className="font-semibold text-stellar-white mb-3">1. Share Your Heart</h4>
                  <p className="text-nebula-mist text-sm">
                    Write about what you're feeling. Your message becomes a star in our 3D galaxy, 
                    anonymously shared with the world.
                  </p>
                </div>
                <div className="bg-space-void/50 p-6 rounded-lg border border-cosmic-border">
                  <h4 className="font-semibold text-stellar-white mb-3">2. Explore the Galaxy</h4>
                  <p className="text-nebula-mist text-sm">
                    Navigate through space to discover other people's emotions. Each star tells a unique 
                    story of human experience.
                  </p>
                </div>
                <div className="bg-space-void/50 p-6 rounded-lg border border-cosmic-border">
                  <h4 className="font-semibold text-stellar-white mb-3">3. Send Stardust</h4>
                  <p className="text-nebula-mist text-sm">
                    When a message resonates with you, send stardust to show connection and empathy. 
                    It's our way of saying "I understand."
                  </p>
                </div>
                <div className="bg-space-void/50 p-6 rounded-lg border border-cosmic-border">
                  <h4 className="font-semibold text-stellar-white mb-3">4. Time Capsules</h4>
                  <p className="text-nebula-mist text-sm">
                    Set your emotions to appear in the future, creating digital time capsules that 
                    remind us emotions are timeless.
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-stellar-white mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-emotions-longing" />
                Our Values
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-emotions-hope mt-2 animate-twinkle"></div>
                  <div>
                    <h4 className="font-semibold text-stellar-white mb-1">Privacy & Anonymity</h4>
                    <p className="text-nebula-mist text-sm">
                      Your identity remains completely anonymous. We believe emotional expression should be free from judgment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-emotions-joy mt-2 animate-twinkle"></div>
                  <div>
                    <h4 className="font-semibold text-stellar-white mb-1">Authentic Connection</h4>
                    <p className="text-nebula-mist text-sm">
                      We foster genuine emotional connections between people across the globe through shared experiences.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-emotions-passion mt-2 animate-twinkle"></div>
                  <div>
                    <h4 className="font-semibold text-stellar-white mb-1">Mental Wellbeing</h4>
                    <p className="text-nebula-mist text-sm">
                      We provide a safe space for emotional expression, promoting mental health through shared humanity.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-stellar-white mb-4">
                Ready to Share Your Heart?
              </h3>
              <p className="text-nebula-mist mb-6">
                Join thousands of others in creating the most beautiful emotional galaxy in the universe.
              </p>
              <Link to="/">
                <Button className="bg-gradient-to-r from-emotions-passion to-emotions-hope hover:scale-105 transition-all duration-300 glow-passion">
                  <Heart className="w-4 h-4 mr-2" />
                  Enter the Galaxy
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default About;