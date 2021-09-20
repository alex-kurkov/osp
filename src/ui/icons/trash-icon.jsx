import React from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  width: ${(props) => props.width || '24px'};
  height: ${(props) => props.height || '24px'};
  fill: ${(p) => p.theme.colors.textPrimary};
  justify-self: end;
  &:hover {
    cursor: pointer;
  }
`
const StyledPath = styled.path`
  fill: ${p => p.theme.colors.background};
`
const ContrastPath = styled.path`
  fill: ${p => p.theme.colors.textPrimary}
`

const TrashIcon = ({ 
  width, 
  height,
  onClick
}) => {

  return (
  <Svg
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    width={width}
    height={height}
  >
    <StyledPath d="M13.1 0.5l37.8 0c6.95,0 12.6,5.65 12.6,12.6l0 37.8c0,6.96 -5.65,12.6 -12.6,12.6l-37.8 0c-6.95,0 -12.6,-5.64 -12.6,-12.6l0 -37.8c0,-6.95 5.65,-12.6 12.6,-12.6z"/>
    <ContrastPath fillRule="nonzero" d="M13.1 0l37.8 0c3.61,0 6.89,1.47 9.26,3.84 2.37,2.37 3.84,5.65 3.84,9.26l0 37.8c0,3.62 -1.47,6.89 -3.84,9.26 -2.37,2.37 -5.64,3.84 -9.26,3.84l-37.8 0c-3.62,0 -6.89,-1.47 -9.26,-3.84 -2.37,-2.37 -3.84,-5.64 -3.84,-9.26l0 -37.8c0,-3.61 1.47,-6.89 3.84,-9.26 2.37,-2.37 5.65,-3.84 9.26,-3.84zm37.8 1.01l-37.8 0c-3.34,0 -6.36,1.35 -8.55,3.54 -2.19,2.19 -3.54,5.22 -3.54,8.55l0 37.8c0,3.34 1.35,6.36 3.54,8.55 2.19,2.19 5.22,3.55 8.55,3.55l37.8 0c3.34,-0.01 6.36,-1.36 8.55,-3.55 2.19,-2.19 3.54,-5.21 3.54,-8.55l0 -37.8c0,-3.34 -1.35,-6.36 -3.54,-8.55 -2.19,-2.19 -5.21,-3.54 -8.55,-3.54z"/>
    <ContrastPath d="M38.72 11.84l-13.44 0 0 4.25 -13.44 0 0 4.24 40.32 0 0 -4.24 -13.44 0 0 -4.25zm-22.4 12.73l0 23.35c0,2.34 2.01,4.24 4.48,4.24l22.4 0c2.47,0 4.48,-1.9 4.48,-4.24l0 -23.35 -4.48 0 0 23.35 -22.4 0 0 -23.35 -4.48 0zm8.96 0l0 19.1 4.48 0 0 -19.1 -4.48 0zm8.96 0l0 19.1 4.48 0 0 -19.1 -4.48 0z"/>

  </Svg>
)}

export default TrashIcon;
