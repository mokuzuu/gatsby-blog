import React from 'react';
import Img from 'gatsby-image';

import Wrapper from './Wrapper';

function FeaturedImage({ sizes }) {
  console.log(sizes)
  return (
    <Wrapper>
      <Img sizes={sizes} alt="" objectFit="contain"/>
    </Wrapper>
  );
}

export default FeaturedImage;
