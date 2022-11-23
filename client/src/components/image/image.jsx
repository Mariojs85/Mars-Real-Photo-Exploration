import { useState } from 'react';
import Spinner from '../spinner/spinner';
import './image.css';


const Image = ({
  src,
  width,
  height,
  alt,
  phantomWidth,
  phantomHeight
}) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <>
      <img
        style={imgLoaded ? {} : { display: 'none' }}
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setImgLoaded(true)}
      />
      <div
        style={{
          width: phantomWidth,
          height: phantomHeight,
          display: imgLoaded ? 'none' : 'flex'
        }}
        className="image-spinner"
      >
        <Spinner />
      </div>
    </>
  );
};

export default Image;
