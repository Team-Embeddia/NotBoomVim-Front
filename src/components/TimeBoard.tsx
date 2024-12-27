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

  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();

  return (
    <Card className='w-[590px] h-[204px] flex items-center justify-center'>
      <p className='font-bold text-[128px] text-center'>
        {hour}:{minute}
        <span className='text-[64px]'>:{second}</span>
      </p>
    </Card>
  );
};

export default TimeBoard;
