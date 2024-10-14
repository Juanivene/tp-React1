import { useEffect, useRef, useState } from "react";
import ColorsCards from "./ColorsCards";

const ColorsForm = () => {
  const coloresEnLs = JSON.parse(localStorage.getItem("colores")) || [];
  const $inputColor = useRef();
  const [colores, setColor] = useState(coloresEnLs);
  useEffect(() => {
    localStorage.setItem("colores", JSON.stringify(colores));
  }, [colores]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const color = $inputColor.current.value;
    const nuevoArray = [...colores, color];
    setColor(nuevoArray);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="color"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            ref={$inputColor}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div>
        <ColorsCards className="mt-5" />
      </div>
    </>
  );
};

export default ColorsForm;
