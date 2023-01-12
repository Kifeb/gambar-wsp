import React from 'react';

function NavBar() {
  return (
    <header className="flex flex-col sm:h-44 items-center sm:relative sm:top-0 ">
      <p className="text-black text-[86px] sm:text-[169px] font-chewy leading-none">
        GAMBAR
      </p>
      <p className="tyellow text-[40px] sm:text-[83px] font-chewy absolute leading-[0] top-[77px] sm:top-[142px]">
        untuk
      </p>
      <p className="text-black text-[60px] sm:text-[120px] font-chewy leading-[0.5]">
        marctool
      </p>
    </header>
  );
}

export default NavBar;
