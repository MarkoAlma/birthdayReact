import React from 'react'

export const Counter = ({szam}) => {
    
  return (
    <div>
      person: {szam!=0?szam:"today no more events..."}
    </div>
  )
}