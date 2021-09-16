import React from 'react'
import styled from 'styled-components'

const StyledWrap = styled.div`
  margin-left: 8px;
  transform: ${(props) =>
    props.direction === 'up'
      ? 'rotate(180deg)'
      : 'rotate(0)'
  };
  transition: transform .3s ease-in-out;
`

const Svg = styled.svg`
  width: ${(props) => props.width || '24px'};
  height: ${(props) => props.height || '24px'};
  stroke: ${(p) => p.theme.colors.textPrimary};
`

const ArrowIcon = ({ onClick, direction = 'down', width, height }) => (
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
      <path d="M12 10l-6 5m6 -5l6 5" strokeWidth="2" strokeLinecap="round" />
    </Svg>
  </StyledWrap>
)

export default ArrowIcon
