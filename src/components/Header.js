import React from 'react';
import styled from "styled-components";

export default function Header() {
  return (
    <Top>
        <Title>CINEFLEX</Title>
    </Top>
  )
}

const Top = styled.div`
    width: 100vw;
    height: 67px;
    background-color: #C3CFD9;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    position: fixed;
    top: 0;
    right: 0;
    left: 0;
`

const Title = styled.h1`
    color: #E8833A;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
`