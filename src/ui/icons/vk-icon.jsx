import React from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  width: ${(props) => props.width || '24px'};
  height: ${(props) => props.height || '24px'};
  &:hover {
    cursor: pointer;
  }
`
const StyledPath = styled.path`
  fill: ${p => p.theme.colors.textPrimary};
  `
const FilledPath = styled.path`
  stroke-width: 6px;
  stroke: ${p => p.theme.colors.textPrimary};
  fill: ${p => p.theme.colors.background};
`

const VkIcon = ({ 
  width, 
  height, 
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
    <FilledPath d="M4.07 65.2c0.26,2.21 0.15,4.81 0.59,7.05 0.43,2.22 0.69,4.21 1.22,6.34 6.63,26.83 30.45,45.55 59.51,45.41 8.98,-0.04 17.5,-2.6 24.35,-5.77 7.05,-3.27 12.32,-7.44 17.36,-12.51 16.35,-16.48 22.34,-44.28 11.2,-67.28 -6.42,-13.27 -16.74,-23.56 -30.56,-29.56 -15.81,-6.87 -33.89,-6.41 -49.32,0.87 -6.92,3.27 -12.79,7.76 -17.42,12.44 -7.55,7.63 -13.22,18.18 -15.61,29.37 -0.68,3.18 -1.67,10.57 -1.32,13.64z"/>
    <StyledPath d="M47.69 45.18c4.14,0.76 4.61,2.97 4.8,7.34 0.14,3.19 0.27,8.87 -1.08,11.13 -2.72,4.55 -10.13,-9.7 -11.06,-11.7 -0.59,-1.27 -1.3,-2.73 -1.89,-4.12 -0.69,-1.64 -1.03,-3.03 -2.56,-3.56 -1.54,-0.53 -4.06,-0.29 -5.83,-0.28 -2.04,0 -4.08,-0.01 -6.12,0 -4.82,0.03 -2.72,3.03 -0.82,7.07 3.27,6.98 6.71,13.18 10.9,19.56 0.89,1.36 1.71,2.36 2.58,3.55 3.54,4.84 7.69,8.62 13.31,11.17 2.59,1.18 6.46,2.3 9.78,2.33 2.4,0.01 6.72,0.6 7.63,-1.49 0.47,-1.06 0.28,-1.6 0.37,-2.77 0.24,-3.12 1.63,-8.14 5.17,-5.78 2.96,1.97 5.58,6.7 9.3,8.93 1.76,1.06 2.74,1.12 5.01,1.11 2.04,-0.01 4.08,-0.01 6.12,0 2.06,0.01 3.9,0.18 5.71,-0.41 4.29,-1.39 0.27,-5.98 -0.86,-7.44 -1.21,-1.58 -2.95,-3.37 -4.37,-4.75l-4.63 -4.49c-2.55,-2.85 -0.86,-4.79 1.65,-8.08 0.91,-1.19 1.75,-2.27 2.67,-3.46 2.17,-2.81 5.83,-7.72 7.12,-11.23 0.83,-2.27 0.47,-3.22 -1.68,-3.68 -1.45,-0.31 -4.2,-0.14 -5.85,-0.14 -2.04,-0.01 -4.08,-0.01 -6.12,0 -5.3,0.03 -3.77,-0.16 -6.51,5.74 -2.17,4.66 -3.81,7.6 -6.77,11.58 -0.55,0.74 -2.24,2.59 -3.14,2.97 -1.78,0.74 -2.67,-1.48 -2.85,-2.92 -0.24,-1.86 -0.03,-9.66 0.08,-11.84 0.09,-1.8 0.21,-4.25 -0.61,-5.53 -1.47,-2.31 -7.71,-1.99 -10.32,-1.96 -2.02,0.02 -3.8,0.11 -5.66,0.5 -1.4,0.29 -3.61,1.28 -3.47,2.65z"/>

  </Svg>
)}

export default VkIcon;
