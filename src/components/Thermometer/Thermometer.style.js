import styled from "styled-components";

export const Wrapper = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-top: 100px;
    background: #e9efe3;
    position: relative;
    border: 2px solid #dae1d2;
`;

export const TargetTemperatureIndicatorWrapper = styled.div`
    width: 1.8%;
    height: 35%;
    top: 15%;
    left: 48.85%;
    opacity: 0.8;
    position: absolute;
    background: black;
    border-radius: 10px;
    transform-origin: bottom;
    transform: rotate(${(props) => props.calculatedangle}deg)
`;


