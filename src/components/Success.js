import { useNavigate } from "react-router";
import styled from "styled-components";
import React from 'react';
import Header from './Header';

export default function Success({ booking, setBooking }) {
    const navigate = useNavigate();
    
  return (
    <>
        <Header/>
        <Container>
            <TitleBar>
                <TopTitle>Pedido feito com sucesso!</TopTitle>
            </TitleBar>
            <OrderInfo>
                <Infos>
                    <Title>Filme e sessão</Title>
                    <Text>{booking.film} <br/>{`${booking.date} - ${booking.time}`}</Text>
                </Infos>
                <Infos>
                    <Title>Ingressos</Title>
                    <Text>Assento {booking.assento}</Text>
                </Infos>
                <Infos>
                    <Title>Comprador</Title>
                    <Text>Nome: {booking.name}<br/>CPF: {booking.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}</Text>
                </Infos>
            </OrderInfo>
            <ButtonBox>
                <Button onClick={backHome}>Voltar pra Home</Button>
            </ButtonBox>
        </Container>
    </>
  );

  function backHome(){
    setBooking({});
    navigate('/')
  }
 
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

const TopTitle = styled.h2`
    color: #247A6B;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
`

const OrderInfo = styled.div`
    width: 100vw;
    height: 382;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 50px;
`

const Infos = styled.div`

`

const Title = styled.h3`
    color: #293845;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
`

const Text = styled.h3`
    color: #293845;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
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
