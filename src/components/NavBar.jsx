import React from 'react';

function NavBar() {
  return (
    <header className="flex flex-col items-center relative mt-7">
      <p className="text-black text-[83px] font-chewy leading-none">GAMBAR</p>
      <p className="tyellow text-[83px] font-chewy absolute leading-[0] top-[72px]">
        untuk
      </p>
      <p className="text-black text-[83px] font-chewy leading-[0.5]">
        marctool
      </p>
    </header>
  );
}

export default NavBar;
