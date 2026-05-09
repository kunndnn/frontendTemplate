import { useState } from "react";
import { placeholder } from "../config/assets";

const Image = ({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const handleError = () => {
    if (imgSrc !== placeholder) return setImgSrc(placeholder);
  };
  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      loading="lazy"
      onError={handleError}
    />
  );
};

export default Image;
