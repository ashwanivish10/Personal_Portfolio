// src/components/ui/AnimatedSection.tsx

import { motion } from 'framer-motion';
import React from 'react';

// यह कंपोनेंट अपने children को एनिमेट करेगा जब वह स्क्रीन पर दिखेगा
export function AnimatedSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // शुरू में अदृश्य और थोड़ा नीचे होगा
      whileInView={{ opacity: 1, y: 0 }} // जब स्क्रीन पर आएगा तो दिखेगा और अपनी जगह पर आ जाएगा
      viewport={{ once: true, margin: '-100px' }} // यह एनिमेशन सिर्फ एक बार चलेगा
      transition={{ duration: 0.6, ease: 'easeInOut' }} // एनिमेशन की स्पीड और स्टाइल
    >
      {children}
    </motion.div>
  );
}