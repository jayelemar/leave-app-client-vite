import React from 'react'

export const preventPastePassword = (e: React.ClipboardEvent<HTMLInputElement>) => {
  e.preventDefault()
  return false
}
