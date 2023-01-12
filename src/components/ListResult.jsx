import React from 'react';

function ListResult({urls}) {
  function copy() {
    navigator.clipboard.writeText(urls);
  }

  return (
    <section className="flex justify-center items-center flex-col overflow-hidden">
      {urls.length > 0 && (
        <>
          <div className="relative">
            <div className="pt-9 bosolid box brown h-[357px] w-[397px] overflow-scroll ">
              <ul className="font-vt323 text-base text-white text-center">
                {urls.map((url, index) => {
                  return (
                    <li key={index}>
                      <a href={url} target="_blank">
                        {url},
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="w-full h-[36px] flex justify-end  items-center bosolid soft absolute top-0">
              <button className="mr-2 bit" type="submit" onClick={copy}>
                copy
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default ListResult;
