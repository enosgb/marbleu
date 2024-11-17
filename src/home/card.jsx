import { useState } from "react";

export default function Card({ images }) {
  const [fadeClass, setFadeClass] = useState("fade-in");
  const [index, setIndex] = useState(0);

  function handleNextPage() {
    setFadeClass("fade-out");
    setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
      setFadeClass("fade-in");
    }, 500);
  }

  function handlePrevPage() {
    setFadeClass("fade-out");
    setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : images.length - 1
      );
      setFadeClass("fade-in");
    }, 500);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row justify-between gap-5 relative w-[250px]">
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 transition-transform duration-300 bg-transparent z-10"
          onClick={handlePrevPage}
          disabled={index === 0}
        >
          &#10094;
        </button>
        <div
          className={`bg-white w-full h-full flex flex-col justify-center items-center rounded border box-shadow p-2`}
        >
          <img
            className={`w-full h-full object-cover ${fadeClass}`}
            src={images[index]}
            alt=""
          />
          <div className="flex flex-col justify-center items-center p-2">
            <div>
              <span className="font-bold"> Biquíni Branco Clássico:</span>{" "}
              <span className="text-[12px]">
                {" "}
                Sinta-se deslumbrante e elegante com o nosso Biquíni Branco
                Clássico. Este design atemporal é perfeito para quem aprecia a
                simplicidade sofisticada e o estilo que nunca sai de moda.
              </span>
            </div>
          </div>
        </div>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 transition-transform duration-300 bg-transparent z-10"
          onClick={handleNextPage}
          disabled={index === images.length - 1}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}

