import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer'
import Header from './Header'
import styled from "styled-components";

export default function Seats() {
    const { idSession } = useParams();

    const [seats, setSeats] = useState({});

    const[poster, setPoster] = useState();
    const[title, setTitle] = useState();

    useEffect(() => {
		const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`);
		promise.then(data);
	}, []);

    
    function data(response){
        setSeats(response.data.seats);
        setPoster(response.data.movie.posterURL);
        setTitle(response.data.movie.title);
    }
    

  return (
    <>
        <Header/>
        <Container>
            <TitleBar>
                <Title>Selecione o(s) assento(s)</Title>
            </TitleBar>

            <SeatsMap>

                {seats.map && seats.map((seat) => <Seat>{seat.name < 10 ? `0${seat.name}` : seat.name}</Seat>)}

                
            </SeatsMap>

            <InfoBuyer>
                <InputsBox>
                    <TitleInput>Nome do comprador:</TitleInput>
                    <Input placeholder="Digite seu nome..."></Input>
                    <TitleInput>CPF do comprador:</TitleInput>
                    <Input placeholder="Digite seu CPF..."></Input>
                </InputsBox>
            </InfoBuyer>
            <ButtonBox>
                <Button>Reservar assento(s)</Button>
            </ButtonBox>

        </Container>
        <Footer posterImg={poster} infoSession={title}/>
    </>
  )
}

const Container = styled.div`
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 117px;

    display: flex;
    flex-direction: column;
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
    color: #293845;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
`

const SeatsMap = styled.div`
    width: 100vw;
    height: 300px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 8px;
`

const Seat = styled.div`
    width: 26px;
    height: 26px;
    background-color: #FBE192;
    border: 1px solid #F7C52B;
    border-radius: 12px;

    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #000;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const InfoBuyer = styled.div`
    width: 100vw;
    height: 228px;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const InputsBox = styled.div`
    
`

const TitleInput = styled.h3`
    color: #293845;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
`

const Input = styled.input`
    width: 327px;
    height: 51px;
    padding-left: 18px;
    background-color: #fff;
    border: 1px solid #D5D5D5;
    border-radius: 3px;
    outline: 0;

    ::placeholder{
        color: #AFAFAF;
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
    }
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