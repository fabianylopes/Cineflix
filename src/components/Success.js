import { useNavigate } from "react-router";
import styled from "styled-components";
import React from 'react';
import BackButton from "./BackButton";

export default function Success({ booking, setBooking }) {
    const navigate = useNavigate();

    let seats = booking.chosenSeats;
    
  return (
    <>
        <BackButton path={-1}/>
        <Container>
            <TitleBar>
                <TopTitle>Pedido feito <br/>com sucesso!</TopTitle>
            </TitleBar>

            <OrderInfo>
                <div>
                    <Title>Filme e sessão</Title>
                    <Text>{booking.film} <br/>{`${booking.date} - ${booking.time}`}</Text>
                </div>
                <div>
                    <Title>Ingressos</Title>
                    {seats.map(seat => <Text>Assento {seat}</Text>)}
                </div>
                <div>
                    <Title>Comprador</Title>
                    <Text>Nome: {booking.name}<br/>CPF: {booking.cpf}</Text>
                </div>
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
    height: 382px;
    padding-left: 30px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 50px;
`

const Title = styled.h3`
    color: #293845;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 6px;
`

const Text = styled.h3`
    color: #293845;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
`

const ButtonBox = styled.div`
    width: 100vw;
    padding-top: 80px;

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
    border: none;
    cursor: pointer;

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
