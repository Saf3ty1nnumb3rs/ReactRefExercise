import React from 'react';

import ImageCard from './ImageCard';

import './ImageList.scss';

const ImageList = (props) => {
  console.log(props.images);
  const images = props.images.map((image) => {
    return <ImageCard className="image" key={image.id} image={image} />
  });
  return <div className="image-list">{images}</div>
}

export default ImageList;