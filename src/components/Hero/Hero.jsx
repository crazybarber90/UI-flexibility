import { useState, useEffect } from 'react'
import { images } from '../../assets/data'

const Hero = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-card rounded-2xl p-2 shadow-lg w-full max-w-3xl mx-auto overflow-hidden">
      <div className="relative h-64 rounded-xl flex items-center justify-center overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        <span className="absolute text-xl font-bold text-black bg-white/20 px-4 py-2 rounded-md backdrop-blur-sm z-10">
          Slider illustration
        </span>
      </div>
    </div>
  )
}

export default Hero
