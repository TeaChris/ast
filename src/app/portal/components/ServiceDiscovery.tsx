'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, Star, Info, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { usePortalStore, type Service } from '@/lib/store/usePortalStore'

const CATEGORIES = [
      'All',
      'Signature',
      'Relaxation',
      'Deep Tissue',
      'Thai',
      'Prenatal',
]

const SERVICES = [
      {
            id: '1',
            name: 'The Aura Signature',
            category: 'Signature',
            price: 180,
            duration: '90 min',
            description:
                  'Our bespoke combination of slow movements and deep pressure for ultimate restoration.',
            videoUrl: 'https://cdn.pixabay.com/video/2019/04/10/22699-329437148_large.mp4',
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1544161515-4af6b1d462c2?q=80&w=2070',
      },
      {
            id: '2',
            name: 'Zen Harmony Massage',
            category: 'Relaxation',
            price: 140,
            duration: '60 min',
            description:
                  'A rhythmic experience using essential oils to calm the nervous system.',
            videoUrl: 'https://cdn.pixabay.com/video/2021/04/05/70275-534364407_large.mp4',
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070',
      },
      {
            id: '3',
            name: 'Deep Obsidian Reset',
            category: 'Deep Tissue',
            price: 220,
            duration: '120 min',
            description:
                  'Intense muscle work aimed at chronic tension points, combined with hot stone therapy.',
            videoUrl: 'https://cdn.pixabay.com/video/2020/03/10/33458-396263590_large.mp4',
            rating: 5.0,
            image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1974',
      },
]

export default function ServiceDiscovery() {
      const [activeCategory, setActiveCategory] = useState('All')
      const { setService, setBookingOpen } = usePortalStore()

      const filteredServices =
            activeCategory === 'All'
                  ? SERVICES
                  : SERVICES.filter((s) => s.category === activeCategory)

      return (
            <div className="px-8 pb-32">
                  <div className="max-w-7xl mx-auto">
                        {/* Category Filter */}
                        <div className="flex items-center gap-4 mb-16 overflow-x-auto pb-4 no-scrollbar">
                              {CATEGORIES.map((category) => (
                                    <button
                                          key={category}
                                          onClick={() =>
                                                setActiveCategory(category)
                                          }
                                          className={cn(
                                                'relative px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300',
                                                activeCategory === category
                                                      ? 'text-obsidian'
                                                      : 'text-cream/50 bg-gold-dim/5 border border-gold/10 hover:border-gold/30 hover:text-cream',
                                          )}
                                    >
                                          {category}
                                          {activeCategory === category && (
                                                <motion.div
                                                      layoutId="category-pill"
                                                      className="absolute inset-0 bg-gold rounded-full -z-10 shadow-[0_4px_20px_rgba(212,175,55,0.3)]"
                                                      transition={{
                                                            type: 'spring',
                                                            bounce: 0.2,
                                                            duration: 0.6,
                                                      }}
                                                />
                                          )}
                                    </button>
                              ))}
                        </div>

                        {/* Grid Container */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 auto-rows-[450px]">
                              {filteredServices.map((service, index) => (
                                    <ServiceCard
                                          key={service.id}
                                          service={service}
                                          index={index}
                                          onBook={() => {
                                                setService(service)
                                                setBookingOpen(true)
                                          }}
                                    />
                              ))}
                        </div>
                  </div>
            </div>
      )
}

interface ServiceCardProps {
      service: Service
      index: number
      onBook: () => void
}

function ServiceCard({ service, index, onBook }: ServiceCardProps) {
      const [isHovered, setIsHovered] = useState(false)

      return (
            <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                        delay: index * 0.1,
                        duration: 0.8,
                        ease: 'easeOut',
                  }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  className={cn(
                        'relative rounded-3xl overflow-hidden group shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/5',
                        index % 3 === 1
                              ? 'md:translate-y-12'
                              : index % 3 === 2
                                ? 'lg:translate-y-24'
                                : '',
                  )}
            >
                  {/* Background Image / Video */}
                  <div className="absolute inset-0 z-0">
                        <motion.img
                              src={service.image}
                              alt={service.name}
                              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <AnimatePresence>
                              {isHovered && service.videoUrl && (
                                    <motion.video
                                          initial={{ opacity: 0 }}
                                          animate={{ opacity: 1 }}
                                          exit={{ opacity: 0 }}
                                          autoPlay
                                          muted
                                          loop
                                          playsInline
                                          className="absolute inset-0 w-full h-full object-cover"
                                    >
                                          <source
                                                src={service.videoUrl}
                                                type="video/mp4"
                                          />
                                    </motion.video>
                              )}
                        </AnimatePresence>
                        <div className="absolute inset-0 bg-linear-to-t from-obsidian via-obsidian/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                        <div className="flex justify-between items-start mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                              <span className="bg-gold/20 backdrop-blur-md border border-gold/40 text-gold-light px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest leading-none">
                                    {service.category}
                              </span>
                              <div className="flex items-center gap-1 text-gold-light">
                                    <Star size={14} fill="currentColor" />
                                    <span className="text-xs font-bold">
                                          {service.rating}
                                    </span>
                              </div>
                        </div>

                        <h3 className="text-3xl font-sans text-cream mb-2 group-hover:text-gold transition-colors duration-500">
                              {service.name}
                        </h3>

                        <div className="flex items-center gap-6 text-cream/40 text-xs uppercase tracking-widest mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                              <span className="flex items-center gap-1.5">
                                    <Clock size={14} /> {service.duration}
                              </span>
                              <span className="w-1 h-1 bg-gold/40 rounded-full" />
                              <span>${service.price}</span>
                        </div>

                        <p className="text-cream/70 text-sm font-light mb-8 line-clamp-2 max-w-sm transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                              {service.description}
                        </p>

                        <div className="flex items-center gap-3">
                              <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={onBook}
                                    className="flex-1 bg-gold text-obsidian px-6 py-4 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all group-hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                              >
                                    Reserver Maintenant
                                    <ChevronRight size={16} />
                              </motion.button>

                              <motion.button
                                    whileHover={{
                                          scale: 1.05,
                                          backgroundColor:
                                                'rgba(212,175,55,0.15)',
                                    }}
                                    className="w-14 h-14 rounded-2xl border border-gold/30 flex items-center justify-center text-gold transition-colors"
                              >
                                    <Info size={20} />
                              </motion.button>
                        </div>
                  </div>
            </motion.div>
      )
}
