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

    updateImages(); // 초기 이미지 설정
    const imageInterval = setInterval(updateImages, 3000);

    return () => clearInterval(imageInterval);
  }, []);

  return (
    <Carousel className='w-[1222px] h-[643px] z-0'>
      <CarouselContent>
        <CarouselItem>
          <div className='p-1'>
            <Card className='h-[643px]'>
              <CardContent className='flex items-center justify-center h-full rounded-xl'>
                <img
                  src={imageUrl} // 상태에서 가져온 imageUrl 사용
                  alt='Image'
                  className='object-cover w-full h-full rounded-xl'
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className='p-1'>
            <Card className='h-[643px]'>
              <CardContent className='flex items-center justify-center h-full rounded-xl'>
                <img
                  src={aiImageUrl} // 상태에서 가져온 aiImageUrl 사용
                  alt='AI Image'
                  className='object-cover w-full h-full rounded-xl'
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
