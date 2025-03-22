'use client';

import Autoscroll from 'embla-carousel-auto-scroll';
import useEmblaCarousel from 'embla-carousel-react';
import Image, { StaticImageData } from 'next/image';
import './carousel.css';
import { cn } from '@/lib/utils';

type Props = {
  buyerImages: StaticImageData[];
  isBackward?: boolean;
  className?: string;
};

export default function CarouselAutoscroll({ buyerImages, isBackward = false, className }: Props) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoscroll({
      speed: 1,
      startDelay: 500,
      stopOnInteraction: false,
      stopOnFocusIn: false,
      direction: isBackward ? 'backward' : 'forward',
    }),
  ]);

  return (
    <div className={cn('embla', className)}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {buyerImages?.map((image, index) => (
            <div className="embla__slide !mx-[6px] !px-0 flex-[0_0_22%] max-md:flex-[0_0_35%]" key={index}>
              <Image src={image} alt={`NFT-${index + 1}`} className="object-cover w-full rounded-xl" placeholder="blur" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
