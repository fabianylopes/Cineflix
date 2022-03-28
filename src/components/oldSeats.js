import { useState, useEffect } from 'react';
import { useNavigate } from "react-router";
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import axios from 'axios';
import BackButton from './BackButton';
import Footer from './Footer';
import Loading from './Loading';

export default function Seats({ booking, setBooking }) {
    const navigate = useNavigate();

    const { idSession } = useParams();

    const [selectedSeats, setSelectedSeats] = useState([]);
    const [buyers, setBuyers] = useState([]);
    const [showtime, setShowtime] = useState(null);
  
    const [movieInfo, setMovieInfo] = useState({});
    const [buyerInfo, setBuyerInfo] = useState({name: '', cpf: ''});

    useEffect(() => {
		const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`);
		promise.then(response => setShowtime(response.data));
	}, [idSession]);

   
  
    function handleSelectSeat(seat) {
      if (!seat.isAvailable) {
        alert("Esse assento não está disponível");
        return;
      }
  
      if (selectedSeats.includes(seat)) {
        // eslint-disable-next-line no-restricted-globals
        const confirmDelete = confirm("Quer realmente tirar o assento?");
        if (confirmDelete) {
          const filteredSeats = selectedSeats.filter(selectedSeat => selectedSeat.id !== seat.id);
          setSelectedSeats(filteredSeats);
  
          console.log(buyers);
  
          const filteredBuyers = buyers.filter(buyer => buyer.idAssento !== seat.id);
          setBuyers(filteredBuyers);
          return;
        }
  
        return;
      }
  
      setSelectedSeats([...selectedSeats, seat]);
    }
  
    function handleCreateBooking() {
      const ids = selectedSeats.map(selectedSeat => selectedSeat.id);
      const booking = {
        ids, compradores: buyers
      };
  
      if (ids.length === 0 && buyers.length === 0) {
        alert('Preencha todas as informações');
        return;
      }
  
      const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", booking);
      promise.then(() => {
        setBooking({
          title: showtime.movie.title,
          date: showtime.day.date,
          time: showtime.name,
          seats: selectedSeats,
          buyers
        });
        navigate('/sucesso');
      });
    }
  
/*     function handleAddBuyer(seatId, name, cpf) {
      setBuyers([...buyers, { idAssento: seatId, nome: name, cpf }])
    } */
  
    if(showtime === null){
        return <Loading/>
    }
  
    return (
        <>
            <BackButton path={-1}/>
            <Container >
                <TitleBar>
                    <Title>Selecione o(s) assento(s)</Title>
                </TitleBar>
        
                <SeatsMap>
                {
                    showtime.seats.map(seat => (
                        <Spot
                        Unavailable={!seat.isAvailable}
                        isSelected={selectedSeats.includes(seat)}
                        onClick={() => handleSelectSeat(seat)}
                        >
                        {seat.name}
                    </Spot>
                    ))
                }
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

                {/* <div className="form">
                {selectedSeats.map(selectedSeat => (
                    <SeatBuyer seat={selectedSeat.name} seatId={selectedSeat.id} handleAddBuyer={handleAddBuyer} />
                    ))}
                </div>
 */}
                <BuyerInfo>
                <TitleInput>Nome do comprador:</TitleInput>
                <Input 
                    type="text" 
                    placeholder="Digite seu nome..." 
                    onChange={(e) => setBuyerInfo({...buyerInfo, name:e.target.value})} 
                    value={buyerInfo.name}>
                </Input>

                <TitleInput>CPF do comprador:</TitleInput>
                <Input 
                    type="text" 
                    placeholder="Digite seu CPF..." 
                    onChange={(e) => setBuyerInfo({...buyerInfo, cpf:e.target.value})} 
                    value={buyerInfo.cpf}>
                </Input>
            </BuyerInfo>  
        
                <ButtonBox>
                    <Button onClick={handleCreateBooking}>Reservar assento(s)</Button>
                </ButtonBox>
        
        
            </Container>
            <Footer poster={movieInfo.poster} title={movieInfo.title} date={`${movieInfo.date} - `} time={movieInfo.time}/>
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

function spotBackground({ unavailable, isSelected }){
    if(unavailable){
        return '#C3CFD9';
    }
    if(isSelected){
        return '#8DD7CF';
    }
    return '#FBE192';
}

function spotBorder({ unavailable, isSelected }){
    if(unavailable){
        return '#7B8B99';
    }
    if(isSelected){
        return '#1AAE9E';
    }
    return '#F7C52B';
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
