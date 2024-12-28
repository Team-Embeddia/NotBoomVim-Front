import './App.css';
import TimeBoard from './components/TimeBoard';
import CongestionBoard from './components/CongestionBoard';
import { DesignChart } from './components/DesignChart';
import Header from './components/Header';
import { Image } from './components/Image';

function App() {
  const personData = [
    { person: 20 },
    { person: 413 },
    { person: 647 },
    { person: 539 },
    { person: 980 },
    { person: 841 },
  ];
  const p = 'Low'
  const personTick = Math.max(...personData.map((item) => item.person));
  const personTicks = Array.from(
    { length: 4 },
    (_, i) => (personTick * (i + 1)) / 4
  );

  
  return (
    <div className='flex flex-col items-center font-Pretendard bg-home'>
      <Header />
      <div className='pt-[61px]'>
        <Image />
      </div>
      <section className='flex gap-10 py-[57px]'>
        <div className='flex flex-col gap-[23px]'>
          <CongestionBoard congestion={p} />
          <TimeBoard />
        </div>
        <DesignChart
          title='사람'
          congestion={p}
          person={personData[5].person}
          data={personData}
          tick={personTick}
          ticks={personTicks}
        />
      </section>
    </div>
  );
}

export default App;
