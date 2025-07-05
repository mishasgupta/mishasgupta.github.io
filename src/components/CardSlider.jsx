import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import section from '../assets/images/section.jpg'
import orchestra from '../assets/images/orch.jpg'
import nature from '../assets/images/nature.jpg'
import mountain from '../assets/images/mountain.JPG'
import hawks from '../assets/images/hawks.jpg'
import falcons from '../assets/images/falcons.jpg'
import braves from '../assets/images/braves.JPG'
import cats from '../assets/images/cats.jpg'

const CardSlider = () => {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla">
      <div className="embla__viewport mx-auto mt-14 h-70 md:h-90 w-sm md:w-md lg:w-xl border-2 border-emerald-600/30 rounded-xl" ref={emblaRef}>
        <div className="embla__container h-full">

          <div className="embla__slide flex items-center justify-center">
            <img 
              src={cats}
              alt="Cats"
              className="object-cover h-full w-full"
            />
          </div>

          <div className="embla__slide flex items-center justify-center">
            <img 
              src={nature}
              alt="Nature"
              className="object-cover h-full w-full"
            />
          </div>

          <div className="embla__slide flex items-center justify-center">
            <img 
              src={mountain}
              alt="Mountain"
              className="object-cover h-full w-full"
            />
          </div>

          <div className="embla__slide flex items-center justify-center">
            <img 
              src={section}
              alt="Trombone Section"
              className="object-fit h-full w-full"
            />
          </div>

          <div className="embla__slide flex items-center justify-center">
            <img 
              src={orchestra}
              alt="Orchestra"
              className="object-cover h-full w-full"
            />
          </div>

          <div className="embla__slide flex items-center justify-center">
            <img 
              src={falcons}
              alt="Atlanta Falcons"
              className="object-cover h-full w-full"
            />
          </div>

          <div className="embla__slide flex items-center justify-center">
            <img 
              src={hawks}
              alt="Atlanta Hawks"
              className="object-cover h-full w-full"
            />
          </div>

          <div className="embla__slide flex items-center justify-center">
            <img 
              src={braves}
              alt="Atlanta Braves"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4 gap-4">
        <button className="embla__prev rounded-full border-2 border-emerald-600/30 px-5 py-2 text-2xl cursor-pointer" onClick={scrollPrev}>
          ❮
        </button>
        <button className="embla__next rounded-full border-2 border-emerald-600/30 px-5 py-2 text-2xl cursor-pointer" onClick={scrollNext}>
          ❯
        </button>
      </div>
    </div>
  )
}

export default CardSlider