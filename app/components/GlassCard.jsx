'use client'

import { useState } from 'react'

export default function GlassCard({ title, desc, cta }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const isCleaningCard = title === "Housekeeping Reports"
  
  return (
    <article className={`glass-card ${isExpanded ? 'expanded' : ''}`} tabIndex={0} role="article" aria-label={title}>
      <div className="glass-card-body">
        <h3>{title}</h3>
        {isExpanded && desc && <p>{desc}</p>}
      </div>
      <div className="glass-card-footer">
        {cta && (
          <a className={`card-cta ${isCleaningCard ? 'sparkle-cleaning' : ''}`} href="#">{cta}</a>
        )}
        {desc && !isCleaningCard && (
          <button 
            className="read-more-btn" 
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
          >
            {isExpanded ? 'Read less' : 'Read more'}
          </button>
        )}
      </div>
    </article>
  )
}
