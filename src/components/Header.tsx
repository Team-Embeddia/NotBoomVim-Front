const Header = () => {
  return (
    <header className='w-full h-16 px-5 py-4 bg-black flex items-center sticky top-0'>
      <div className='flex gap-5'>
        <img src='/src/asset/logo.png' className='w-9 h-9 ' />
        <div className='flex items-center gap-[7px]'>
          <img src='/src/asset/text.png' className='w-[120px] h-5' />
          <p className='text-[24px] text-white'>CONTROL PANEL</p>
        </div>
      </div>
    </header>
  );
};

export default Header;