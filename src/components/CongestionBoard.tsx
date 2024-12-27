import React, { useEffect, useState } from 'react';
import { Card } from './ui/card';

type congestionType = 'High' | 'Medium' | 'Low';

interface Props {
  congestion: congestionType;
}

const CongestionBoard = ({ congestion }: Props) => {
  const [data, setData] = useState<{ color: string; text: string }>({
    color: 'red',
    text: '혼잡',
  });
  useEffect(() => {
    switch (congestion) {
      case 'High':
        setData({ color: 'red', text: '혼잡' });
        break;
      case 'Medium':
        setData({ color: 'yellow', text: '보통' });
        break;
      case 'Low':
        setData({ color: 'green', text: '여유' });
    }
  }, [congestion]);
  return (
    <Card className='w-[590px] h-[204px] flex justify-center items-center'>
      <p className={`font-bold text-[100px] !text-[${data.color}]`}>
        {data.text}
      </p>
    </Card>
  );
};

export default CongestionBoard;
