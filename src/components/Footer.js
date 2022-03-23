import React from 'react';
import styled from "styled-components";

export default function Footer({ poster, title, date, time }) {
  return (
    <Bar>
        <img src={poster} alt=""/>
        <InfoMovie>
          <Info>{`${title}`}</Info>
          <Info>{`${date} ${time}`}</Info>
        </InfoMovie>
    </Bar>
  );
}

const Bar = styled.div`
    width: 100vw;
    height: 117px;
    padding: 14px 10px;
    background-color: #DFE6ED;
    border: 1px solid #9EADBA;

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

const InfoMovie = styled.div`

`

const Info = styled.h3`
  color: #293845;
  font-weight: 400;
  font-size: 26px;
  line-height: 30px;
  margin: 2px;
`
