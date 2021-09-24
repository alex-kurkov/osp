import React from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  width: ${(props) => props.width || '24px'};
  height: ${(props) => props.height || '24px'};
  fill: ${(p) => p.theme.colors.textPrimary};
  &:hover {
    cursor: pointer;
  }
`
const StyledPath = styled.path`
  stroke: ${p => p.theme.colors.textPrimary};
  stroke-width: 10px;
  fill: ${p => p.liked 
    ? p.theme.colors.textPrimary
    : 'transparent'
  };
  transition: all 0.2s ease-in-out;
`

const LikeIcon = ({ 
  width, 
  height, 
  liked = false,
  onClick
}) => {

  return (
  <Svg
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    fill="none"
    width={width}
    height={height}
  >
    <StyledPath liked={liked} 
      d="M64.09 114c-1.11,-0.72 -2.74,-2.69 -3.83,-3.77 -5.44,-5.4 -13.7,-12.67 -19.65,-17.62 -12.42,-10.34 -30.06,-24.26 -34.89,-39.93 -5.83,-18.89 3.8,-34.34 19.69,-37.18 13.21,-2.37 22.24,5.06 30.19,13.41 2.12,2.23 4.06,6.47 8.49,6.49 4.43,0.02 6.37,-4.35 8.5,-6.48 8.04,-8.05 16.42,-15.95 30.18,-13.42 8.49,1.55 14.52,6.41 17.76,12.15 3.83,6.78 4.52,16.88 1.93,25.02 -2.57,8.08 -6.95,13.49 -11.38,18.56 -6.18,7.06 -24.34,22.24 -31.57,28.29l-15.42 14.48zm0 -95.09c0,0 0,0 0,0z"
    />
  </Svg>
)}

export default LikeIcon
