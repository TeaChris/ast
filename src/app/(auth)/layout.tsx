import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aura — Sign In',
  description: 'Sign in to Aura, your premium appointment scheduling platform.',
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full" style={{ background: 'var(--obsidian)' }}>
      {children}
    </div>
  )
}
