"use client"

import { createContext, useContext, useState, ReactNode } from 'react'
import MobileSidebar from './mobile-sidebar'

interface MobileSidebarContextType {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

const MobileSidebarContext = createContext<MobileSidebarContextType | undefined>(undefined)

export function useMobileSidebar() {
  const context = useContext(MobileSidebarContext)
  if (context === undefined) {
    throw new Error('useMobileSidebar must be used within a MobileSidebarProvider')
  }
  return context
}

interface MobileSidebarProviderProps {
  children: ReactNode
}

export function MobileSidebarProvider({ children }: MobileSidebarProviderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <MobileSidebarContext.Provider value={{ isOpen, open, close, toggle }}>
      {children}
      <MobileSidebar isOpen={isOpen} onClose={close} />
    </MobileSidebarContext.Provider>
  )
}