import { useEffect, useState } from 'react';
import { Card } from './ui/card';

type congestionType = 'High' | 'Medium' | 'Low';

interface Props {
  congestion: congestionType;
  loading: boolean;
}

const CongestionBoard = ({ congestion, loading }: Props) => {
  const [data, setData] = useState<{ color: string; text: string }>({
    color: '',
    text: '',
  });
  useEffect(() => {
    switch (congestion) {
      case 'High':
        setData({ color: '#DC1111', text: '혼잡' });
        break;
      case 'Medium':
        setData({ color: '#F1D84C', text: '보통' });
        break;
      case 'Low':
        setData({ color: '#60C000', text: '여유' });
    }
  }, [congestion]);

  if (loading) {
    return (
      <Card className='w-[590px] h-[204px] flex justify-center items-center mobile:w-full'>
        <p className={`font-bold text-[100px]`}>로딩중...</p>
      </Card>
    );
  }

  return (
    <Card className='w-[590px] h-[204px] flex justify-center items-center mobile:w-full mobile:h-[150px]'>
      <p className={`font-bold text-[100px] mobile:text-[75px]`} style={{ color: data.color }}>
        {data.text}
      </p>
    </Card>
  );
};

export default CongestionBoard;
