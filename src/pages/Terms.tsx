import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Users, AlertTriangle, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Terms = () => {
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
              Terms of Service
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
              <FileText className="w-16 h-16 text-emotions-hope mx-auto mb-4" />
              <h2 className="text-3xl font-bold bg-stellar-gradient bg-clip-text text-transparent mb-2">
                Terms of Service
              </h2>
              <p className="text-nebula-mist">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="space-y-8 text-nebula-mist">
              {/* Agreement */}
              <section>
                <h3 className="text-xl font-semibold text-stellar-white mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-emotions-joy" />
                  Agreement to Terms
                </h3>
                <p className="leading-relaxed">
                  By accessing and using Echoes of the Heart, you agree to be bound by these Terms 
                  of Service and all applicable laws. If you do not agree with any of these terms, 
                  you are prohibited from using this service.
                </p>
              </section>

              {/* Use License */}
              <section>
                <h3 className="text-xl font-semibold text-stellar-white mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-emotions-longing" />
                  Use License & Acceptable Behavior
                </h3>
                <div className="space-y-4">
                  <div className="bg-space-void/50 p-4 rounded-lg border border-cosmic-border">
                    <h4 className="font-semibold text-stellar-white mb-2">Permitted Use</h4>
                    <p className="text-sm mb-2">You may use Echoes of the Heart to:</p>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Share genuine emotions and personal experiences</li>
                      <li>• Explore and connect with others' emotional content</li>
                      <li>• Send supportive reactions (stardust) to resonate with others</li>
                      <li>• Create time capsules for future emotional reflection</li>
                    </ul>
                  </div>
                  <div className="bg-space-void/50 p-4 rounded-lg border border-cosmic-border">
                    <h4 className="font-semibold text-stellar-white mb-2">Prohibited Activities</h4>
                    <p className="text-sm mb-2">You agree NOT to:</p>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Share content that is hateful, threatening, or harassing</li>
                      <li>• Post spam, advertisements, or promotional content</li>
                      <li>• Attempt to identify or contact other users</li>
                      <li>• Share personal information (yours or others')</li>
                      <li>• Use the service for any illegal activities</li>
                      <li>• Attempt to hack or disrupt the service</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Content Guidelines */}
              <section>
                <h3 className="text-xl font-semibold text-stellar-white mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-emotions-passion" />
                  Content Guidelines
                </h3>
                <p className="leading-relaxed mb-4">
                  Echoes of the Heart is a safe space for authentic emotional expression. 
                  We encourage sharing genuine feelings while maintaining respect for others.
                </p>
                <div className="bg-space-void/50 p-4 rounded-lg border border-cosmic-border">
                  <h4 className="font-semibold text-stellar-white mb-2">We Welcome:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Personal stories and emotional experiences</li>
                    <li>• Messages of hope, love, sadness, joy, and longing</li>
                    <li>• Reflections on life, relationships, and personal growth</li>
                    <li>• Creative and poetic expressions of emotion</li>
                  </ul>
                </div>
              </section>

              {/* Privacy & Anonymity */}
              <section>
                <h3 className="text-xl font-semibold text-stellar-white mb-4">Privacy & Anonymity</h3>
                <p className="leading-relaxed">
                  Our service operates on complete anonymity. By using Echoes of the Heart, you 
                  acknowledge that all content is shared anonymously and cannot be traced back to 
                  individual users. This protects everyone's privacy but also means content cannot 
                  be edited or deleted once submitted.
                </p>
              </section>

              {/* Intellectual Property */}
              <section>
                <h3 className="text-xl font-semibold text-stellar-white mb-4">Content Ownership</h3>
                <p className="leading-relaxed">
                  You retain ownership of the emotional content you share. By submitting content, 
                  you grant us a license to display it anonymously within our galaxy visualization. 
                  The visual design, code, and concept of Echoes of the Heart remain our intellectual property.
                </p>
              </section>

              {/* Disclaimers */}
              <section>
                <h3 className="text-xl font-semibold text-stellar-white mb-4">Disclaimers</h3>
                <div className="space-y-3">
                  <p className="leading-relaxed">
                    <strong>Mental Health:</strong> While we provide a supportive space for emotional 
                    expression, Echoes of the Heart is not a substitute for professional mental health 
                    treatment or therapy.
                  </p>
                  <p className="leading-relaxed">
                    <strong>Content Accuracy:</strong> We do not verify the accuracy of user-submitted 
                    content. All emotions and stories are shared as personal expressions.
                  </p>
                  <p className="leading-relaxed">
                    <strong>Service Availability:</strong> We strive for continuous service but do not 
                    guarantee uninterrupted access to the platform.
                  </p>
                </div>
              </section>

              {/* Limitation of Liability */}
              <section>
                <h3 className="text-xl font-semibold text-stellar-white mb-4">Limitation of Liability</h3>
                <p className="leading-relaxed">
                  Echoes of the Heart is provided "as is" without warranties of any kind. We are not 
                  liable for any damages arising from your use of the service, including but not limited 
                  to emotional distress from reading other users' content.
                </p>
              </section>

              {/* Modifications */}
              <section>
                <h3 className="text-xl font-semibold text-stellar-white mb-4">Modifications to Terms</h3>
                <p className="leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be effective 
                  immediately upon posting. Continued use of the service after changes constitutes 
                  acceptance of the new terms.
                </p>
              </section>

              {/* Contact */}
              <section>
                <h3 className="text-xl font-semibold text-stellar-white mb-4">Contact Information</h3>
                <p className="leading-relaxed">
                  If you have questions about these Terms of Service, please contact us at 
                  terms@echoesoftheheart.com or through our website.
                </p>
              </section>

              {/* Governing Law */}
              <section>
                <h3 className="text-xl font-semibold text-stellar-white mb-4">Governing Law</h3>
                <p className="leading-relaxed">
                  These terms are governed by and construed in accordance with applicable laws, 
                  and any disputes will be resolved in the appropriate jurisdiction.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Terms;