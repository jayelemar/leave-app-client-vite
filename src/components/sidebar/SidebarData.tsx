import { File, Home, User } from 'lucide-react'

// NavData.tsx
export const links = [
  {
    name: 'Home',
    to: '/dashboard',
    icon: Home,
  },
  {
    name: 'Request Leave',
    to: '/request-leave',
    icon: File,
  },
  { name: 'Profile', to: '/profile', icon: User },
]
