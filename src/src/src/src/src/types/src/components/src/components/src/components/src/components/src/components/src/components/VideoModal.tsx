import { useEffect } from 'react'
import ReactPlayer from 'react-player'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoUrl: string
  title: string
}

export default function VideoModal({ isOpen, onClose, videoUrl, title }: VideoModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90" onClick={onClose}>
      <div className="relative w-full max-w-4xl mx-4" onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300"
        >
          ✕
        </button>
        <div className="bg-netflix-dark rounded-lg overflow-hidden">
          <div className="aspect-video">
            <ReactPlayer
              url={videoUrl}
              width="100%"
              height="100%"
              controls
              playing={isOpen}
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
