import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from 'axios';

export default function Home() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
		const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
		promise.then(response => {setMovies(response.data);});
	}, []);

    if(movies === []){
        return <h1>Carregando...</h1>
    }

    return (
        <>
            <TitleBar>
                <Title>Selecione o filme</Title>
            </TitleBar>
            <Container>
                {movies.map((movie) => <Link to={`/sessions/${movie.id}`} key={movie.id}><img  src={movie.posterURL} alt=""/></Link>)}
            </Container>
        </>
    );
}

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

const Container = styled.div`
    padding-left: 24px;
    padding-right: 24px;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;

    img {
        height: 193px;
        border:solid 8px #fff;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        cursor: pointer;
    }
`
