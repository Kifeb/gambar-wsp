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
          <label className="form_label">NAMA DOMAIN</label>
          <div className="shadow"></div>
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
          <label className="form_label">NAMA GAMBAR</label>
          <div className="shadow"></div>
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
          <label className="form_label">EXTENSI GAMBAR</label>
          <div className="shadow"></div>
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
          <label className="form_label">JUMLAH GAMBAR</label>
          <div className="shadow"></div>
        </div>
        <div className="w-[112.5px] h-[36px] relative flex justify-center">
          <button
            className="h-full w-full z-10 red bit"
            type="submit"
            onClick={handleChange}>
            HIT
          </button>
          <div className="shadow"></div>
        </div>
      </form>
    </section>
  );
}

export default InputForm;
