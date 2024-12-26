import './App.css';
import { DesignChart } from './components/DesignChart';
import Header from './components/Header';
import Image from './components/Image';

function App() {
  const congestionData = [
    { desktop: 0 },
    { desktop: 40 },
    { desktop: 60 },
    { desktop: 50 },
    { desktop: 90 },
    { desktop: 78 },
  ];

  const personData = [
    { desktop: 20 },
    { desktop: 413 },
    { desktop: 647 },
    { desktop: 539 },
    { desktop: 980 },
    { desktop: 841 },
  ];

  const personTick = Math.max(...personData.map((item) => item.desktop));
  const personTicks = Array.from(
    { length: 4 },
    (_, i) => (personTick * (i + 1)) / 4
  );

  return (
    <div className='font-Pretendard flex flex-col items-center bg-home'>
      <Header />
      <div className='pt-[61px]'>
        <Image />
      </div>
      <div className='flex gap-10 py-[57px]'>
        <DesignChart
          title='혼잡도'
          congestion={congestionData[5].desktop}
          data={congestionData}
        />
        <DesignChart
          title='사람'
          congestion={congestionData[5].desktop}
          person={personData[5].desktop}
          data={personData}
          tick={personTick}
          ticks={personTicks}
        />
      </div>
    </div>
  );
}

export default App;
