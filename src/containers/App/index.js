import React from "react";
import { Wrapper, TargetTemperatureWrapper } from './App.style';
import heaterTemperatureDetails from "../../assets/HeaterTemperatureDetails";
import Thermometer from "../../components/Thermometer/index.js";

export const App = () => {;
   const { maxTemperature,minTemperature,targetTemperature } = heaterTemperatureDetails;
  return (
    <Wrapper>
      <Thermometer maxTemperature={maxTemperature}  minTemperature={minTemperature} targetTemperature={targetTemperature} ></Thermometer>
      <TargetTemperatureWrapper>{targetTemperature}&deg;C</TargetTemperatureWrapper>
    </Wrapper>
 );
}

export default App;