import React from 'react'
import styled from 'styled-components'

const StyledWrap = styled.div`
  transform: ${(props) =>
    props.direction === 'left'
      ? 'rotate(180deg)'
      : props.direction === 'down'
      ? 'rotate(90deg)'
      : 'none'};
`

const Svg = styled.svg`
  @keyframes move {
    0% {
      opacity: 0;
    }
    100% {
      transform: translateX(10px);
      opacity: 100%;
    }
  }

  width: ${(props) => props.width || '24px'};
  height: ${(props) => props.height || '24px'};
  stroke: ${(p) => p.theme.colors.textPrimary};
  animation: ${p => p.direction !== 'down' && 'move'} 2s linear infinite alternate;
`

const ChevronIcon = ({ onClick, direction = 'right', width, height }) => (
  <StyledWrap direction={direction}>
    <Svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill="none"
      direction={direction}
    >
      <path d="M13 17L18 12L13 7" strokeWidth="2" strokeLinecap="round" />
      <path d="M6 17L11 12L6 7" strokeWidth="2" strokeLinecap="round" />
    </Svg>
  </StyledWrap>
)

export default ChevronIcon
