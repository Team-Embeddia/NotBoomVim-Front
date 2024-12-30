'use client';

import { CartesianGrid, Line, LineChart, YAxis } from 'recharts';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { useEffect, useState } from 'react';
import Count from './Count';

type congestionType = 'High' | 'Medium' | 'Low';

interface Data {
  id: number;
  peopleCount: number;
  status: congestionType;
}

interface Props {
  title: string;
  congestion: 'High' | 'Medium' | 'Low';
  person?: number;
  data: Data[];
}

const chartConfig = {
  desktop: {
    label: 'peopleCount',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

export function DesignChart({ title, congestion, person, data }: Props) {
  const [color, setColor] = useState<string>('');
  const [tick, setTick] = useState<number[]>([0, 10]);
  const [ticks, setTicks] = useState<number[]>([0, 10]);

  const fetchTick = () => {
    const people = Math.max(...data.map((item) => item.peopleCount));
    console.log(data);
    setTick([0, people]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchTick();
      setTicks([0, tick[1] / 4, tick[1] / 2, (tick[1] * 3) / 4, tick[1]]);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    switch (congestion) {
      case 'High':
        setColor('#DC1111');
        break;
      case 'Medium':
        setColor('#F1D84C');
        break;
      case 'Low':
        setColor('#60C000');
        break;
    }
  }, [congestion]);

  return (
    <Card className='w-[590px] h-[431px] px-8 py-7'>
      <CardHeader>
        <CardTitle className='text-[30px] !font-light'>{title}</CardTitle>
        <Count color={color} person={person ?? 0} />
      </CardHeader>
      <CardContent className='pt-2'>
        <ChartContainer config={chartConfig} className='w-[518px] h-[220px]'>
          <LineChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} horizontal={true} />
            <YAxis
              tickLine={false}
              tickMargin={30}
              axisLine={false}
              domain={tick}
              ticks={ticks}
              tick={{ color: '#000000', fontSize: '13px', fontWeight: '500' }}
              interval={0}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey='peopleCount'
              type='linear'
              stroke='blue'
              strokeWidth={2}
              dot={{
                fill: 'blue',
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
