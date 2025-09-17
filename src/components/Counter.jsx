import React from 'react'

export const Counter = ({szam}) => {
    
  return (
    <div>
      {szam!=0?"person: "+szam:"today no more events..."}
    </div>
  )
}