import { Parallax } from "react-parallax";

const Cover = ({ img, title, description }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the"
      strength={-200}
    >
      <div className="hero md:h-[600px]  p-8 md:py-32 md:px-48">
        <div className="hero-overlay bg-opacity-60 bg-black md:py-20"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">{description}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
