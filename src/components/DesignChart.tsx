'use client';

import { CartesianGrid, Line, LineChart, YAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { useEffect, useState } from 'react';

interface Props {
  title: string;
  congestion: 'High' | 'Medium' | 'Low';
  person?: number;
  data: object[];
  tick?: number;
  ticks?: number[];
}

const chartConfig = {
  desktop: {
    label: 'Person',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

export function DesignChart({
  title,
  congestion,
  person,
  data,
  tick,
  ticks,
}: Props) {
  const [color, setColor] = useState<string>('');

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
  }, [congestion, data]);

  return (
    <Card className='w-[590px] h-[431px] px-8 py-7'>
      <CardHeader>
        <CardTitle className='text-[30px] !font-light'>{title}</CardTitle>
        <CardDescription className='text-[34px] flex items-center font-light'>
          <span
            className={`text-[50px] font-semibold`}
            style={{ color: color }}
          >
            {person}
          </span>
          명
        </CardDescription>
      </CardHeader>
      <CardContent className='pt-2'>
        <ChartContainer config={chartConfig} className='w-[518px] h-[220px]'>
          <LineChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} horizontal={true} />
            <YAxis
              tickLine={false}
              tickMargin={30}
              axisLine={false}
              domain={[0, `${tick}`]}
              ticks={ticks && [0, ...ticks]}
              tick={{ color: '#000000', fontSize: '13px', fontWeight: '500' }}
              interval={0}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey='person'
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
