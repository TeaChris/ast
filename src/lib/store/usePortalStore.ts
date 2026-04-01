import { create } from 'zustand';

export interface Service {
  id: string;
  name: string;
  category: string;
  price: number;
  duration: string;
  description: string;
  videoUrl?: string;
  image: string;
  rating: number;
}

interface BookingState {
  selectedService: Service | null;
  selectedDate: Date | null;
  selectedTime: string | null;
  isBookingOpen: boolean;
  currentView: 'dashboard' | 'discovery' | 'history';
  
  // Actions
  setService: (service: Service | null) => void;
  setDate: (date: Date | null) => void;
  setTime: (time: string | null) => void;
  setBookingOpen: (isOpen: boolean) => void;
  setView: (view: 'dashboard' | 'discovery' | 'history') => void;
}

export const usePortalStore = create<BookingState>((set) => ({
  selectedService: null,
  selectedDate: null,
  selectedTime: null,
  isBookingOpen: false,
  currentView: 'dashboard',

  setService: (service) => set({ selectedService: service }),
  setDate: (date) => set({ selectedDate: date }),
  setTime: (time) => set({ selectedTime: time }),
  setBookingOpen: (isOpen) => set({ isBookingOpen: isOpen }),
  setView: (view) => set({ currentView: view }),
}));
