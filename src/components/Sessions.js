import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import React from 'react'
import Footer from './Footer'
import Header from './Header'
import styled from "styled-components";
import axios from 'axios';

export default function Sessions() {
    const { idFilm } = useParams();

    const [sessions, setSessions] = useState({});

    useEffect(() => {
		const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilm}/showtimes`);
		promise.then(response => {setSessions(response.data)});
	}, []);

  return (
    <> 
        <Header/>
        <Container>
            <TitleBar>
                <Title>Selecione o horário</Title>
            </TitleBar>

            <Days>

                {sessions.days && sessions.days.map((session) => {          
                    return (
                        <>
                            <Day key={session.id}>{session.weekday} - {session.date}</Day>
                            <Showtime>
                                
                                {session.showtimes.map((s) => {
                                    return (
                                        <Link to={`/seats/${s.id}`}>
                                            <Time>{s.name}</Time>
                                        </Link>
                                    )}
                                )}
                            </Showtime>
                        </>
                    )  
                            
                })}

            </Days>
        </Container>
        <Footer posterImg={sessions.posterURL} infoSession={sessions.title}/>
    </>
  )
}

const Container = styled.div`
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 117px;
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

const Days = styled.div`
    width: 100vw;
    height: 112px;
    background-color: #fff;
`

 const Day = styled.h3`
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    align-items: center;
 `

 const Showtime = styled.div`
    padding-top: 22px;
    padding-bottom: 22px;

    display: flex;
    gap: 8px;
 `

 const Time = styled.button`
    width: 83px;
    height: 43px;
    background-color: #E8833A;
    border-radius: 3px;
    border: none;
    cursor: pointer;
    
    color: #fff;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
 `