import TimeBoard from './components/TimeBoard';
import CongestionBoard from './components/CongestionBoard';
import { DesignChart } from './components/DesignChart';
import Header from './components/Header';
import { Image } from './components/Image';
import { useEffect, useState } from 'react';
import axios from 'axios';

type congestionType = 'High' | 'Medium' | 'Low';

interface Data {
  id: number;
  peopleCount: number;
  status: congestionType;
}

interface People {
  people_count: number;
  status: congestionType;
}

function App() {
  const [Data, setData] = useState<Data[]>([]);
  const [person, setPerson] = useState<People>();
  const [tick, setTick] = useState<number[]>([0, 10]);
  const [ticks, setTicks] = useState<number[]>([0, 10]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_SERVER_URL}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (data) {
        setData(data);
        const people = Math.max(...data.map((item: any) => item.peopleCount));
        setTick([0, people]);
        setTicks([0, people / 4, people / 2, (people * 3) / 4, people]);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.log(
            `Error: ${error.response.status} - ${error.response.data}`
          );
        } else {
          console.log('Error: No response received');
        }
      }
    }
    setLoading(false);
  };
  
  const fetchPeople = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_PEOPLE_URL}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (data) {
        setPerson(data);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.log(
            `Error: ${error.response.status} - ${error.response.data}`
          );
        } else {
          console.log('Error: No response received');
        }
      }
    }
  };
  
  useEffect(() => {
    setTicks([0, tick[1] / 4, tick[1] / 2, (tick[1] * 3) / 4, tick[1]]);
  }, [Data]);
  
  useEffect(() => {
    fetchData();
    fetchPeople();
    const intervalId = setInterval(() => {
      fetchData();
    }, 5000);
    setInterval(() => {
      fetchPeople();
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='flex flex-col items-center font-Pretendard bg-home'>
      <Header />
      <div className='flex flex-col items-center w-full pt-[61px] mobile:px-5'>
        <Image />
      </div>
      <section className='flex justify-center w-full gap-10 py-[57px] mobile:px-5 mobile:flex-col'>
        <div className='flex flex-col gap-[23px]'>
          <CongestionBoard
            congestion={(person?.status && person.status) || 'Low'}
            loading={loading}
          />
          <TimeBoard />
        </div>
        <DesignChart
          title='사람'
          congestion={(person?.status && person.status) || 'Low'}
          person={(person?.people_count && person.people_count) || 0}
          data={Data}
          tick={tick}
          ticks={ticks}
          loading={loading}
        />
      </section>
    </div>
  );
}

export default App;
