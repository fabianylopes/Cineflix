import React from 'react';
import styled from "styled-components";

export default function Footer() {
  return (
    <Bar>
        <img src="https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg" alt=""/>
        <InfoMovie>Enola Holmes Quinta-feira - 15:00</InfoMovie>
    </Bar>
  );
}

const Bar = styled.div`
    width: 100vw;
    height: 117px;
    background-color: #DFE6ED;
    padding: 14px 10px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;

    img {
        height: 72px;
        border:solid 8px #fff;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        margin-right: 14px;
    }
`

const BorderImg = styled.div`
    width: 64px;
    height: 89px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    margin-right: 14px;

    display: flex;
    justify-content: center;
    align-items: center;

    
`

const InfoMovie = styled.h3`
    color: #293845;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
`
