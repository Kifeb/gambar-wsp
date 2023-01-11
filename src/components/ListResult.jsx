import React from 'react';

function ListResult({urls}) {
  return (
    <section className="flex justify-center">
      <div className="w-2/4 bg-green-900">
        <div className="whitespace-pre-wrap break-words text-white">{urls}</div>
      </div>
    </section>
  );
}

export default ListResult;
