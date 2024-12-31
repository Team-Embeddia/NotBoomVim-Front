import { useEffect, useState } from 'react';

const Header = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hour = time.getHours().toString();
  const minute = time.getMinutes().toString().padStart(2, '0');
  const second = time.getSeconds().toString().padStart(2, '0');

  return (
    <header className='sticky top-0 z-50 flex items-center justify-between w-full h-16 px-5 py-4 bg-black'>
      <div className='flex gap-5'>
        <img
          src='https://mirror.zzunipark.com/.notboomvim/NotBoomVim-Front/src/asset/logo.png'
          className='w-9 h-9 '
        />
        <div className='flex items-center gap-[7px] mobile:hidden'>
          <img
            src='https://mirror.zzunipark.com/.notboomvim/NotBoomVim-Front/src/asset/text.png'
            className='w-[120px] h-5'
          />
          <p className='text-[24px] text-white'>CONTROL PANEL</p>
        </div>
      </div>
      <div className='hidden mobile:block mobile:text-white mobile:text-[24px] '>
        {hour}:{minute}:{second}
      </div>
    </header>
  );
};

export default Header;
