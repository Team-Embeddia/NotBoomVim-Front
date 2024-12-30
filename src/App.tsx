import './App.css';
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

function App() {
  const [personData, setPersonData] = useState<Data[]>([]);
  
  const fetchData = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_SERVER_URL}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (data) {
        setPersonData(data);
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
    fetchData();
  }, []);

  return (
    <div className='flex flex-col items-center font-Pretendard bg-home'>
      <Header />
      <div className='pt-[61px]'>
        <Image />
      </div>
      <section className='flex gap-10 py-[57px]'>
        <div className='flex flex-col gap-[23px]'>
          <CongestionBoard
            congestion={personData.length===12 ? personData[11].status : 'Low'}
          />
          <TimeBoard />
        </div>
        <DesignChart
          title='사람'
          congestion={personData.length===12 ? personData[11].status : 'Low'}
          person={personData.length===12 ? personData[11].peopleCount : 6}
          data={personData}
        />
      </section>
    </div>
  );
}

export default App;
