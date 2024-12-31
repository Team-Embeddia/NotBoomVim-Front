import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useEffect, useState } from 'react';

export function Image() {
  const [imageUrl, setImageUrl] = useState(import.meta.env.VITE_IMG_URL);
  const [aiImageUrl, setAIImageUrl] = useState(import.meta.env.VITE_AI_IMG_URL);

  useEffect(() => {
    const updateImages = () => {
      setImageUrl(`${import.meta.env.VITE_IMG_URL}?t=${Date.now()}`);
      setAIImageUrl(`${import.meta.env.VITE_AI_IMG_URL}?t=${Date.now()}`);
    };

    updateImages();
    const imageInterval = setInterval(updateImages, 5000);

    return () => clearInterval(imageInterval);
  }, []);

  return (
    <Carousel className='w-[1222px] h-[643px] z-0 mobile:w-full mobile:h-fit'>
      <CarouselContent>
        <CarouselItem>
          <div className='p-1'>
            <Card className='h-[643px]'>
              <CardContent className='flex items-center justify-center h-full rounded-xl'>
                <img
                  src={imageUrl}
                  alt='Image'
                  className='object-cover w-full h-full rounded-xl'
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className='p-1'>
            <Card className='h-[643px] mobile:h-fit'>
              <CardContent className='flex items-center justify-center h-full rounded-xl'>
                <img
                  src={aiImageUrl}
                  alt='AI Image'
                  className='object-cover w-full h-full rounded-xl'
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className='mobile:hidden'/>
      <CarouselNext className='mobile:hidden'/>
    </Carousel>
  );
}
