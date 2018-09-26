import React from 'react'
import styled from 'styled-components'

const StyledSpinner = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  margin: 200px calc(50% - 32px);

  div {
    position: absolute;
    top: 27px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: #f50057;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);

    &:nth-child(1) {
      left: 6px;
      animation: ellipsis1 0.6s infinite;
    }

    &:nth-child(2) {
      left: 6px;
      animation: ellipsis2 0.6s infinite;
    }

    &:nth-child(3) {
      left: 26px;
      animation: ellipsis2 0.6s infinite;
    }

    &:nth-child(4) {
      left: 45px;
      animation: ellipsis3 0.6s infinite;
    }
  }

  @keyframes ellipsis1 {
    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
    }
  }

  @keyframes ellipsis3 {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(0);
    }
  }

  @keyframes ellipsis2 {
    0% {
      transform: translate(0, 0);
    }

    100% {
      transform: translate(19px, 0);
    }
  }
`

const Spinner = () => (
  <StyledSpinner data-testid="spinner">
    <div />
    <div />
    <div />
    <div />
  </StyledSpinner>
)

export default Spinner
