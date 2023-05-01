import React from "react";
import styled from "styled-components";

const WrapperDiv = styled.div`
font-family: sans-serif;
text-align: center;
background-color: #6868ac;
`;

const BlueH3 = styled.h3`
color: blue;
font-weight: bold;
font-size: 2em;
`;

const Image = styled.img`
border-radius: 75%;
width: 100%;
hieght: auto;
`;

const Para = styled.p`
color: white;
font-style: italic;
background-color: black;

`;

const NasaPhoto = (props) => {
    return (
      <WrapperDiv className='nasa-photo-wrapper'>
        <BlueH3> {props.photo.title} </BlueH3> 
        <Para>{props.photo.data}</Para>
        <Image src={props.photo.hdurl} />
        <Para className="explanation">{props.photo.explanation}</Para>
      </WrapperDiv>
    )
  }

export default NasaPhoto;