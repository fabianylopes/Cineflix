import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from "styled-components";
import axios from 'axios';
import Footer from './Footer';
import Header from './Header';

export default function Seats({ booking, setBooking }) {
    const { idSession } = useParams();

    const [seats, setSeats] = useState({});
    const [movieInfo, setMovieInfo] = useState({});
    const [buyerInfo, setBuyerInfo] = useState({name: '', cpf: ''});

    useEffect(() => {
		const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`);
		promise.then(data);
	}, []);

    function data(response){
        setSeats(response.data.seats);
        setMovieInfo({
            title: response.data.movie.title, 
            poster: response.data.movie.posterURL,
            date: response.data.day.date,
            time: response.data.name
            });
    }

  return (
    <>
        <Header/>
        <Container>
            <TitleBar>
                <Title>Selecione o(s) assento(s)</Title>
            </TitleBar>

            <SeatsMap>
                {seats.map && seats.map((seat) => {
                    return (
                        <Seat key={seat.id} number={seat.name} available={seat.isAvailable}/>
                        )
                })}
            </SeatsMap>

            <SeatsStatus>
                <Status>
                    <SeatStatus className='selected'></SeatStatus>
                    <Text>Selecionado</Text>
                </Status >
                <Status>
                    <SeatStatus className='available'></SeatStatus>
                    <Text>Disponível</Text>
                </Status>
                <Status>
                    <SeatStatus className='unavailable'></SeatStatus>
                    <Text>Indisponível</Text>
                </Status>
            </SeatsStatus>

            <BuyerInfo>
                <TitleInput>Nome do comprador:</TitleInput>
                <Input placeholder="Digite seu nome..." onChange={(e) => setBuyerInfo({...buyerInfo, name:e.target.value})}></Input>
                <TitleInput>CPF do comprador:</TitleInput>
                <Input placeholder="Digite seu CPF..." onChange={(e) => setBuyerInfo({...buyerInfo, cpf:e.target.value})}></Input>
            </BuyerInfo>            

            <ButtonBox>
                <Link to="/success">
                    <Button onClick={handleBooking}>Reservar assento(s)</Button>
                </Link>
            </ButtonBox>
        </Container>
        <Footer poster={movieInfo.poster} title={movieInfo.title} date={`${movieInfo.date} - `} time={movieInfo.time}/>
    </>
  );

  function handleBooking(){
      setBooking(
            {...booking, 
                name: buyerInfo.name, 
                cpf: buyerInfo.cpf,
                film: movieInfo.title,
                date: movieInfo.date,
                time: movieInfo.time
            });
  }
}


function Seat({ number }){
    const [isSelected, SetIsSelected] = useState(false);


    return (
        <Spot isSelected={isSelected} onClick={() => SetIsSelected(!isSelected)}>{number < 10 ? `0${number}` : number}</Spot>
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
    gap: 10px;
`

const SeatsStatus = styled.div`
    width: 367px;
    height: 70px;
    padding-top: 16px;
    padding-left: 50px;
    padding-right: 50px;
    
    display: flex;
    justify-content: space-between;
`

const SeatStatus = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 17px;
`

const Status = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Text = styled.h4`
    color: #4E5A65;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    margin-top: 6px;
`

function spotBackground({ available, isSelected }){
    if(available){
        return '#FBE192';
    }
    if(isSelected){
        return '#8DD7CF';
    }
    return '#C3CFD9';
}

function spotBorder({ available, isSelected }){
    if(available){
        return '#7B8B99';
    }
    if(isSelected){
        return '#1AAE9E';
    }
    return '#808F9D';
}

const Spot = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 17px;
    background-color: ${props => spotBackground(props)};
    border: 1px solid ${props => spotBorder(props)};
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
    width: 367px;
    height: 228px;
    padding-left: 20px;
    padding-right: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px
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