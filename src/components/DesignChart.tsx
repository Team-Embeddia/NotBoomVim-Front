'use client';

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  YAxis,
} from 'recharts';

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
  congestion: number;
  person?: number
  data: object[];
  tick?: number;
  ticks?: number[];
}

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

export function DesignChart({ title, congestion, person, data, tick, ticks }: Props) {
  const [color, setColor] = useState<string>('green');

  useEffect(() => {
    if (congestion > 75) {
      setColor('text-red');
    } else if (congestion > 50) {
      setColor('text-orange');
    } else if (congestion > 25) {
      setColor('text-yellow');
    } else {
      setColor('text-green');
    }
  }, [congestion]);

  return (
    <Card className='w-[590px] h-[431px] px-8 py-7'>
      <CardHeader>
        <CardTitle className='text-[30px]'>{title}</CardTitle>
        <CardDescription className='text-[34px]'>
          <span className={`text-[50px] ${color}`}>{title === '사람' ? person : congestion}</span>
          {title === '사람' ? '명' : '%'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className='w-[518px] h-[220px]'>
          <ResponsiveContainer width='100%' height={250}>
            <LineChart accessibilityLayer data={data}>
              <CartesianGrid vertical={false} horizontal={true} />
              <YAxis
                tickLine={false}
                tickMargin={30}
                axisLine={false}
                domain={[0, `${tick}`]}
                ticks={
                  title === '사람' && ticks
                    ? [0, ...ticks]
                    : [0, 25, 50, 75, 100]
                }
                tick={{ color: '#000000', fontSize: '13px', fontWeight: '500' }}
                interval={0}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Line
                dataKey='desktop'
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
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
