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
  stroke-width: 2px;
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
    viewBox="0 0 30 30"
    fill="none"
    width={width}
    height={height}
  >
    <StyledPath liked={liked} d="M14.49 22.01l1.69 -1.59c0.81,-0.74 1.96,-1.96 2.8,-2.81 0.09,-0.09 0.17,-0.18 0.25,-0.27 0.57,-0.62 1.36,-1.38 1.91,-2.02 0.35,-0.41 0.68,-0.7 1.05,-1.19 0.31,-0.4 0.61,-0.88 0.8,-1.44 0.9,-2.6 -0.91,-5.02 -2.87,-5.57 -1.74,-0.49 -3.8,0.26 -4.55,1.89 -0.12,0.24 -0.18,0.58 -0.32,0.78 -0.37,0.53 -1.16,0.48 -1.48,0.05 -0.15,-0.2 -0.23,-0.52 -0.33,-0.77 -0.23,-0.55 -0.63,-0.95 -0.97,-1.26 -0.78,-0.65 -2.26,-1.04 -3.54,-0.7 -2.74,0.73 -4.29,4.34 -2.16,6.99 0.4,0.49 0.71,0.78 1.05,1.18 0.05,0.07 0.07,0.1 0.13,0.15l0.4 0.44c0.27,0.25 0.93,1.01 1.08,1.15l3.9 3.93c0.2,0.18 0.36,0.36 0.56,0.54l0.6 0.54 0 -0.02z"/>
  </Svg>
)}

export default LikeIcon
