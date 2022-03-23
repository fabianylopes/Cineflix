import { Link } from 'react-router-dom';
import styled from "styled-components";
import React from 'react';
import Header from './Header';

export default function Success() {
  return (
    <>
        <Header/>
        <Container>
            <TitleBar>
                <Title>Pedido feito com sucesso!</Title>
            </TitleBar>
            <ButtonBox>
                <Link to="/">
                    <Button>Voltar pra Home</Button>
                </Link>
            </ButtonBox>
        </Container>
    </>
  );
}

const Container = styled.div`
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 117px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const TitleBar = styled.div`
    width: 100vw;
    height: 110px;
    background-color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const Title = styled.h2`
    color: #247A6B;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
`

const ButtonBox = styled.div`
    width: 100vw;
    height: 102px;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const Button = styled.button`
    width: 225px;
    height: 42px;
    background-color: #E8833A;
    border-radius: 3px;
    cursor: pointer;
    border: none;

    font-family: 'Roboto';
    color: #fff;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`
