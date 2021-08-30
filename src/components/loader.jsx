import styled from 'styled-components';

const Loader = styled.div`
  position: fixed;
  z-index: 101505;
  top: 50%;
  left: 50%;
  width: 30px;
  height: 30px;
  background-color: #fff;
  // fixed
  // цвет указыватьч ерез название - плохая практика) возьмите как #FFF
  border-radius: 100%;
  animation: loader-1 30s infinite linear;
  &:before {
    content: '';
    border-radius: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:after {
    content: '';
    border-radius: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:before {
    width: 1.3em;
    height: 5px;
    animation: loader-2 .8s linear infinite;
    }
  &:after {
    width: 5px;
    height: 1.3em;
    animation: loader-2 1.2s linear infinite;
  }
  @keyframes loader-1 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes loader-2 {
    0% {
      box-shadow: 0.1em -0.04em 0 0.04em black;
    }
    25% {
      box-shadow: 0.1em 0.04em 0 0.04em black;
    }
    50% {
      box-shadow: -0.1em 0.04em 0 0.04em black;
    }
    75% {
      box-shadow: -0.1em -0.04em 0 0.04em black;
    }
    100% {
      box-shadow: 0.04em -0.04em 0 0.04em black;
    }
  }
`;

export default Loader;
