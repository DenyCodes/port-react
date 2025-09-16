// components/SpotifyPlayer.tsx
import React from 'react'
import './SpotifyPlayer.css'

export default function SpotifyPlayer() {
  return (
    <div className="spotify-widget">
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/3Tw7toDghgkxcUxGTtHg1h?utm_source=generator"
        width="100%"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  )
}
