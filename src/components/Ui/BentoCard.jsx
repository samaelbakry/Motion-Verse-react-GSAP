import React from "react";

const BentoCard = ({ src, description, title }) => {
  return (
    <>
      <div className="relative size-full">
        <video
          src={src}
          className="absolute top-0 left-0 size-full object-cover object-center"
          muted
          autoPlay
          loop
        />
        <div className="relative z-10 flex flex-col justify-between p-5 text-blue-50 size-full ">
          <div>
            <h1 className="bento-title special-font"> {title}</h1>
            {description && <p className="mx-w-64 text-xs mt-3 md:text-base">{description}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default BentoCard;
