import { useEffect, useState } from 'react';
import { Card } from './ui/card';

const TimeBoard = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hour = time.getHours().toString();
  const minute = time.getMinutes().toString().padStart(2, '0');
  const second = time.getSeconds().toString().padStart(2, '0');

  return (
    <Card className='w-[590px] h-[204px] flex items-center justify-center mobile:hidden'>
      <p className='font-bold text-[128px] text-center'>
        {hour}:{minute}
        <span className='text-[64px]'>:{second}</span>
      </p>
    </Card>
  );
};

export default TimeBoard;
