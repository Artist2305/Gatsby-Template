import React from 'react';
import Img from 'gatsby-image'
import tw from 'twin.macro'
import styled , { css } from 'styled-components';
import theme from '../theme/theme';

const Triangle = styled.div(() => 
tw`w-screen h-screen opacity-90 fixed z-0`, 
css`clip-path: polygon(0 0, 0% 100%, 73% 0); background-color:  ${({ theme }) => theme.colors.elementColor}`
);

const Background: React.FC = () => {
  return (
    <Triangle>
      
    </Triangle>
  )
}

export default Background;
