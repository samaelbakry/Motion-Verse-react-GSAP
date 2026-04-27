import React from "react";

const Button = ({ id, title, containerClass, leftIcon , rightIcon }) => {
  return (
    <>
      <button
        id={id}
        className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black ${containerClass} `}
      >
        {leftIcon}
        <span className="relative inline-flex font-general text-sm overflow-hidden uppercase">
            <div>
                {title}
            </div>
            {rightIcon &&  rightIcon}
        </span>
      </button>
    </>
  );
};

export default Button;
