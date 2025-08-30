import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Galaxy3D } from '@/components/Galaxy3D';
import { ConstellationSidebar, EmotionType } from '@/components/ConstellationSidebar';
import { EmotionSubmitModal } from '@/components/EmotionSubmitModal';
import { StarDetailModal } from '@/components/StarDetailModal';
import { CosmicHeader } from '@/components/CosmicHeader';
import { CosmicFooter } from '@/components/CosmicFooter';
import { toast } from 'sonner';

interface EmotionData {
  id: string;
  emotion: 'joy' | 'hope' | 'longing' | 'passion' | 'sadness';
  message: string;
  excerpt: string;
  position: [number, number, number];
  timestamp: Date;
  stardustCount: number;
}

// Sample initial emotions to populate the galaxy
const initialEmotions: EmotionData[] = [
  {
    id: '1',
    emotion: 'joy',
    message: 'Today I got my dream job! After months of interviews and rejections, they finally said yes. I can barely contain my excitement. This feeling of pure joy is overwhelming - like every star in the universe is celebrating with me.',
    excerpt: 'Got my dream job today!',
    position: [2, 1, -3],
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    stardustCount: 15
  },
  {
    id: '2',
    emotion: 'hope',
    message: 'Even though things are tough right now, I believe tomorrow will be better. There\'s something magical about hope - it\'s like a lighthouse in the storm, guiding us toward brighter days.',
    excerpt: 'Tomorrow will be better',
    position: [-1, 2, 1],
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
    stardustCount: 8
  },
  {
    id: '3',
    emotion: 'longing',
    message: 'I miss you more than words can express. Every sunset reminds me of the evenings we spent together, watching the sky paint itself in shades of our love. Distance means nothing when someone means everything.',
    excerpt: 'Missing you more than words can say',
    position: [0, -2, 2],
    timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
    stardustCount: 23
  },
  {
    id: '4',
    emotion: 'passion',
    message: 'The way you look at me sets my soul on fire. In your eyes, I see galaxies of possibility, endless adventures waiting for us. This love burns brighter than any star in the cosmos.',
    excerpt: 'You set my soul on fire',
    position: [-3, 0, -1],
    timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
    stardustCount: 31
  },
  {
    id: '5',
    emotion: 'sadness',
    message: 'Goodbye is never easy. As I watched you leave, I felt like a piece of my heart went with you. But maybe that\'s okay - maybe love means carrying a piece of someone with you forever, even when they\'re gone.',
    excerpt: 'Goodbye is never easy',
    position: [1, 1, 3],
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    stardustCount: 12
  },
  {
    id: '6',
    emotion: 'joy',
    message: 'My daughter took her first steps today! The pure wonder in her eyes as she realized she could walk... it reminded me that life is full of beautiful firsts, no matter how old we get.',
    excerpt: 'Baby\'s first steps today!',
    position: [2, -1, 0],
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
    stardustCount: 18
  },
  {
    id: '7',
    emotion: 'hope',
    message: 'Starting therapy was scary, but I\'m finally taking care of my mental health. Each session feels like planting seeds of hope in the garden of my mind. Growth takes time, but I\'m patient.',
    excerpt: 'Taking care of my mental health',
    position: [-2, 1, -2],
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
    stardustCount: 7
  }
];

// Generate random position for new stars
const generateRandomPosition = (): [number, number, number] => {
  const radius = 3 + Math.random() * 4; // Between 3 and 7 units from center
  const theta = Math.random() * Math.PI * 2; // Random angle
  const phi = Math.random() * Math.PI; // Random height angle
  
  return [
    radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.sin(phi) * Math.sin(theta),
    radius * Math.cos(phi)
  ];
};

const Index = () => {
  const [emotions, setEmotions] = useState<EmotionData[]>(initialEmotions);
  const [selectedEmotion, setSelectedEmotion] = useState<EmotionType>('all');
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [selectedStar, setSelectedStar] = useState<EmotionData | null>(null);
  const [hoveredStar, setHoveredStar] = useState<EmotionData | null>(null);
  const [globalStats, setGlobalStats] = useState({
    totalStars: initialEmotions.length,
    globalConnections: 42763 // Mock global connection count
  });

  // Filter emotions based on selected constellation
  const filteredEmotions = selectedEmotion === 'all' 
    ? emotions 
    : emotions.filter(emotion => emotion.emotion === selectedEmotion);

  // Count emotions by type
  const emotionCounts = emotions.reduce((acc, emotion) => {
    acc[emotion.emotion] = (acc[emotion.emotion] || 0) + 1;
    acc.all = emotions.length;
    return acc;
  }, {} as Record<EmotionType, number>);

  const handleSubmitEmotion = async (data: {
    emotion: 'joy' | 'hope' | 'longing' | 'passion' | 'sadness';
    message: string;
    timeCapsule?: Date;
  }) => {
    const newEmotion: EmotionData = {
      id: Date.now().toString(),
      emotion: data.emotion,
      message: data.message,
      excerpt: data.message.slice(0, 50) + (data.message.length > 50 ? '...' : ''),
      position: generateRandomPosition(),
      timestamp: data.timeCapsule || new Date(),
      stardustCount: 0
    };

    setEmotions(prev => [...prev, newEmotion]);
    setGlobalStats(prev => ({
      ...prev,
      totalStars: prev.totalStars + 1,
      globalConnections: prev.globalConnections + Math.floor(Math.random() * 3) + 1
    }));

    if (data.timeCapsule) {
      toast.success(`Your emotion will appear in the galaxy on ${data.timeCapsule.toLocaleDateString()}`, {
        description: "Time capsule created successfully"
      });
    } else {
      toast.success("Your emotion has been added to the cosmic tapestry", {
        description: "A new star is born in the galaxy"
      });
    }
  };

  const handleStardust = (starId: string) => {
    setEmotions(prev => prev.map(emotion => 
      emotion.id === starId 
        ? { ...emotion, stardustCount: emotion.stardustCount + 1 }
        : emotion
    ));
    
    toast.success("Stardust sent!", {
      description: "Your connection has been shared with the cosmos"
    });
  };

  const handleStarClick = (star: EmotionData) => {
    setSelectedStar(star);
  };

  const handleStarHover = (star: EmotionData | null) => {
    setHoveredStar(star);
  };

  // Auto-increment global connections periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setGlobalStats(prev => ({
        ...prev,
        globalConnections: prev.globalConnections + Math.floor(Math.random() * 2)
      }));
    }, 30000); // Every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen galaxy-bg relative overflow-hidden">
      {/* Cosmic Header */}
      <CosmicHeader
        onAddEmotion={() => setIsSubmitModalOpen(true)}
        totalStars={globalStats.totalStars}
        globalConnections={globalStats.globalConnections}
      />

      {/* Main Content */}
      <main className="pt-20 h-screen relative">
        {/* Constellation Sidebar */}
        <ConstellationSidebar
          selectedEmotion={selectedEmotion}
          onEmotionSelect={setSelectedEmotion}
          emotionCounts={emotionCounts}
        />

        {/* 3D Galaxy */}
        <div className="w-full h-full">
          <Galaxy3D
            emotions={filteredEmotions}
            onStarClick={handleStarClick}
            onStarHover={handleStarHover}
          />
        </div>

        {/* Hover Information */}
        {hoveredStar && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-6 right-6 z-20 max-w-sm"
          >
            <div className="glass-cosmic p-4 border border-cosmic-border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-3 h-3 rounded-full bg-emotions-${hoveredStar.emotion} animate-stellar-pulse`} />
                <span className="text-stellar-white font-semibold capitalize">
                  {hoveredStar.emotion}
                </span>
              </div>
              <p className="text-nebula-mist text-sm">
                {hoveredStar.excerpt}
              </p>
              <p className="text-xs text-nebula-mist/70 mt-2">
                Click to read the full message
              </p>
            </div>
          </motion.div>
        )}

        {/* Welcome Message for First Visitors */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
        >
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold bg-stellar-gradient bg-clip-text text-transparent mb-4">
              Welcome to the Cosmos
            </h2>
            <p className="text-nebula-mist text-lg md:text-xl max-w-2xl mx-auto">
              Each glowing star represents a real human emotion floating through space and time
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="text-stellar-white/60 text-sm mt-4"
            >
              Click and drag to explore • Hover over stars to feel their essence
            </motion.p>
          </div>
        </motion.div>
      </main>

      {/* Modals */}
      <EmotionSubmitModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        onSubmit={handleSubmitEmotion}
      />

      <StarDetailModal
        star={selectedStar}
        onClose={() => setSelectedStar(null)}
        onStardust={handleStardust}
      />

      {/* Footer */}
      <CosmicFooter />
    </div>
  );
};

export default Index;