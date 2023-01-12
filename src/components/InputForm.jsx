import React from 'react';

function InputForm({
  domain,
  img,
  extension,
  quantity,
  InputChange,
  handleChange,
}) {
  return (
    <section className="flex justify-center items-center">
      <form className="box bosolid yellow h-[357px] w-[397px] flex flex-col items-center justify-evenly">
        <div className="inputfield">
          <input
            className="input"
            type="text"
            name="domain"
            value={domain}
            placeholder="NAMA DOMAIN"
            onChange={InputChange}
          />
          <label for="" className="">
            NAMA DOMAIN
          </label>
        </div>
        <div className="inputfield">
          <input
            className="input"
            type="text"
            name="img"
            value={img}
            placeholder="NAMA GAMBAR"
            onChange={InputChange}
          />
          <label className="">NAMA GAMBAR</label>
        </div>
        <div className="inputfield">
          <input
            className="input"
            type="text"
            name="extension"
            value={extension}
            placeholder="EXTENSI GAMBAR"
            onChange={InputChange}
          />
          <label className="">EXTENSI GAMBAR</label>
        </div>
        <div className="inputfield">
          <input
            className="input"
            type="number"
            name="quantity"
            value={quantity}
            placeholder="JUMLAH GAMBAR"
            onChange={InputChange}
          />
          <label className="">JUMLAH GAMBAR</label>
        </div>
        <div className="inputfield flex justify-center">
          <button
            className="h-full w-1/2 red bit"
            type="submit"
            onClick={handleChange}>
            HIT
          </button>
        </div>
      </form>
    </section>
  );
}

export default InputForm;
