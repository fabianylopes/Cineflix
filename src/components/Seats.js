import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from "styled-components";
import axios from 'axios';
import Footer from './Footer'
import Header from './Header'

export default function Seats() {
    const { idSession } = useParams();

    const [isAvailable, SetIsAvailable] = useState('available');

    const [seats, setSeats] = useState({});
    const [movieInfo, setMovieInfo] = useState({});
    const [buyerInfo, setBuyerInfo] = useState({name: '', cpf: ''});

    useEffect(() => {
		const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`);
		promise.then(data);
	}, []);

    
    function data(response){
        setSeats(response.data.seats);
        setMovieInfo({title: response.data.movie.title, poster: response.data.movie.posterURL})
    }

    function getSeat(){
        if(isAvailable === 'available'){
            SetIsAvailable('selected')
        }
        if(isAvailable === 'selected'){
            SetIsAvailable('available')
        }
    }

  return (
    <>
        <Header/>
        <Container>
            <TitleBar>
                <Title>Selecione o(s) assento(s)</Title>
            </TitleBar>

            <SeatsMap>
                {seats.map && seats.map((seat) => <Seat key={seat.id} className={!seat.isAvailable ? 'unavailable' : isAvailable} onClick={getSeat}>{seat.name < 10 ? `0${seat.name}` : seat.name}</Seat>)}
            </SeatsMap>

            <BuyerInfo>
                <InputsBox>
                    <TitleInput>Nome do comprador:</TitleInput>
                    <Input placeholder="Digite seu nome..." onChange={(e) => setBuyerInfo({...buyerInfo, name:e.target.value})}></Input>
                    <TitleInput>CPF do comprador:</TitleInput>
                    <Input placeholder="Digite seu CPF..." onChange={(e) => setBuyerInfo({...buyerInfo, cpf:e.target.value})}></Input>
                </InputsBox>
            </BuyerInfo>

            <ButtonBox>
                <Link to="/success">
                    <Button>Reservar assento(s)</Button>
                </Link>
            </ButtonBox>
        </Container>
        <Footer posterImg={movieInfo.poster} infoSession={movieInfo.title}/>
    </>
  )
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
    color: #293845;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
`

const SeatsMap = styled.div`
    width: 367px;
    height: 205px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 8px;
`

const Seat = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 12px;
    cursor: pointer;

    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #000;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const BuyerInfo = styled.div`
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