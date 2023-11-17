import React from "react";
import styled from "styled-components";
import { education } from "../../data/const";

const Card = styled.div`
    width: 768px;
    height: 135px;
    background-color: ${({theme}) => theme.card};
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 2px 2px rgba(0,0,0,0.4);
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;

    @media (max-width: 800px){
        width: 400px;
        height: 160px;
    }
    &:hover(
        transform: translateY(-10px);
        box-shadow: 0 0 40px 4px rgba(0,0,0,0,6);
        filter: brightness(1.1);
    )
`;

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({theme}) => theme.text_secondary};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    margin-left: 2px;
    color: ${({theme}) => theme.text_secondary+80};
    @media (max-width: 768px){
        font-size: 10px;
    }
`;

const Description = styled.div`
    font-weight: 400;
    color: ${({theme}) => theme.text_secondary+99};
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    margin-top: 8px;
    max-width: 100%
`;

const EducationCard = ({education}) => {
    return( 
    <Card>
        <Details>
            <Title>{education.school}</Title>
            <Date>{education.date}</Date>
            <Description>{education.description}</Description>
        </Details>
    </Card>
    )
}

export default EducationCard;