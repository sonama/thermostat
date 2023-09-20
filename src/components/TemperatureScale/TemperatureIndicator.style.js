import styled from "styled-components";

export const Wrapper = styled.div`
    display: block;
    position: absolute;
    left: 46%;
    text-align: center;
    transform-origin: bottom;
    height: 100px;
    transform: rotate(${(props) => props.calculatedangle}deg);
    font-style: italic
`;


export const MaxMinTemperatureIndicator = styled.div`
display: block;
position: absolute;
left: 44%;
text-align: center;
transform-origin: bottom;
height: 39%;
width:25%;
translate: 3px -60px;
background:black;
border-radius:5px
`;


