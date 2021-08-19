/* eslint-disable import/extensions */
import React, { useState, useContext, useEffect } from 'react';
import { ProductsContext } from '../../state/ProductsContext.jsx';
import Image from '../Image/Image.jsx';
import ProductInfo from '../ProductInfo/ProductInfo.jsx';
import Description from '../Description/Description.jsx';
import './Main.css';

function Main() {
  const { currentProduct, currentStyle, getData } = useContext(ProductsContext);
  const [photoArray, setPhotoArray] = useState(null);

  useEffect(() => {
    getData('40344');
  }, []);

  useEffect(() => {
    setPhotoArray(null);
  }, [currentProduct]);

  return (
    <div className="Overview-Section">
      {currentProduct && currentStyle ? (
        <>
          <Image images={photoArray || currentStyle.results[0].photos} />
          <ProductInfo
            currentProduct={currentProduct}
            currentStyle={currentStyle}
            getPhotos={(style) => setPhotoArray(style.photos)}
          />
          <Description
            currentDescription={currentProduct.description}
            features={currentProduct.features}
            slogan={currentProduct.slogan}
          />
        </>
      ) : 'Loading...'}
    </div>
  );
}

export default Main;
