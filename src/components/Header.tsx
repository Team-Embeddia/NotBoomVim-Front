const Header = () => {
  return (
    <header className='sticky top-0 z-50 flex items-center w-full h-16 px-5 py-4 bg-black'>
      <div className='flex gap-5'>
        <img src='https://mirror.zzunipark.com/_notboomvim/NotBoomVim-Front/src/asset/logo.png' className='w-9 h-9 ' />
        <div className='flex items-center gap-[7px]'>
          <img src='https://mirror.zzunipark.com/_notboomvim/NotBoomVim-Front/src/asset/text.png' className='w-[120px] h-5' />
          <p className='text-[24px] text-white'>CONTROL PANEL</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
