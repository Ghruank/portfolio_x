"use client"

import { cn } from "@/lib/utils"

export interface FilterTab<T extends string> {
  value: T
  label: string
  /** Shorter label for phones; falls back to `label`. */
  shortLabel?: string
}

interface FilterTabsProps<T extends string> {
  tabs: FilterTab<T>[]
  active: T
  onChange: (value: T) => void
}

/** Profile-style tab row (like Posts / Replies / Media), placed inside <PageHeader>. */
export default function FilterTabs<T extends string>({ tabs, active, onChange }: FilterTabsProps<T>) {
  return (
    <div className="flex border-b">
      {tabs.map(({ value, label, shortLabel }) => {
        const isActive = active === value
        return (
          <button
            key={value}
            onClick={() => onChange(value)}
            className="flex-auto flex justify-center px-4 hover:bg-accent transition-colors"
          >
            <span
              className={cn(
                "relative py-4 text-sm sm:text-[15px] whitespace-nowrap",
                isActive ? "font-bold text-foreground" : "font-medium text-muted-foreground"
              )}
            >
              <span className="sm:hidden">{shortLabel ?? label}</span>
              <span className="hidden sm:inline">{label}</span>
              {isActive && <span className="absolute bottom-0 left-0 right-0 h-1 rounded-full bg-blue-500" />}
            </span>
          </button>
        )
      })}
    </div>
  )
}
