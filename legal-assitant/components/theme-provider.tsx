// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client"
import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider 
      {...props} 
      attribute="class" 
      defaultTheme="light" 
      enableSystem={false}
    >
      {children}
    </NextThemesProvider>
  )
}