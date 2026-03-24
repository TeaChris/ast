'use client'

import { motion } from 'framer-motion'
import LeftPanel from './LeftPanel'
import AuthForm from './AuthForm'
import { Toaster } from 'sonner'

interface AuthViewProps {
  initialMode: 'sign-in' | 'sign-up'
}

export default function AuthView({ initialMode }: AuthViewProps) {
  return (
    <main className="relative min-h-screen w-full flex overflow-hidden lg:flex-row flex-col">
      <Toaster position="top-right" expand={false} richColors={false} />
      
      {/* Left Panel - Fixed on Desktop, Scrollable/Top on Mobile */}
      <div className="relative lg:w-[45%] w-full lg:h-screen h-[40vh] shrink-0 border-r border-white/5">
        <LeftPanel />
      </div>

      {/* Right Panel - Form Area */}
      <div 
        className="flex-1 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-24 overflow-y-auto"
        style={{ background: 'var(--obsidian)' }}
      >
        <motion.div 
          className="w-full max-w-[420px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <AuthForm initialMode={initialMode} />
        </motion.div>

        {/* Subtle footer */}
        <motion.footer
          className="mt-12 text-[10px] tracking-[0.2em] text-white/20 uppercase font-sans"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          &copy; {new Date().getFullYear()} Aura Intelligence. All rights reserved.
        </motion.footer>
      </div>

      {/* Border overlay for that extra crisp glass feel */}
      <div className="pointer-events-none absolute inset-0 border border-white/5 z-50 rounded-[inherit]" />
    </main>
  )
}
