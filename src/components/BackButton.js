import React from 'react';
import { useNavigate } from "react-router";
import styled from "styled-components";

export default function BackButton({ path }) {
    const navigate = useNavigate();

  return (
    <>
        <Button onClick={() => navigate(path)}>
            <ion-icon name="arrow-undo" size="large"></ion-icon>
        </Button>
    </>
  );
}

const Button = styled.div`
    width: 50px;
    height: 50px;
    position: fixed;
    left: 20px;
    top: 16px;
    z-index: 4;

    ion-icon {
        color: #E8833A;
        cursor: pointer;
    }
`