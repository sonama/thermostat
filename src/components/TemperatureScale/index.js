import React from "react";
import { Wrapper,MaxMinTemperatureIndicator } from "./TemperatureIndicator.style";
import * as constants from  '../../constants/index';

const TemperatureScale = () => {
    let rotationPerSector = 0;
    let temperatureToBeDisplayedOnThermometer = 15;
    const ROTATION_FOR_ONE_DEGREE_ON_THERMOMETER =  constants.TOTAL_ROTATION/ constants.TOTAL_NO_OF_SECTORS; // how many degrees(angle degrees) it needs to be moved for one degree 
    return (
        <React.Fragment>
            {
                [...Array(constants.TOTAL_NO_OF_SECTORS)].map((ele, index) => {
                rotationPerSector =  index === 0 ? 0 : rotationPerSector + constants.SECTOR_INTERVAL;
                const CALCULATED_TEMPERATURE_ANGLE = (rotationPerSector * ROTATION_FOR_ONE_DEGREE_ON_THERMOMETER) + constants.STARTING_ANGLE;
                temperatureToBeDisplayedOnThermometer = index === 0 ? temperatureToBeDisplayedOnThermometer : temperatureToBeDisplayedOnThermometer + constants.SECTOR_INTERVAL;
                return (
                    <Wrapper key = {CALCULATED_TEMPERATURE_ANGLE} calculatedangle= {CALCULATED_TEMPERATURE_ANGLE}>
                        {temperatureToBeDisplayedOnThermometer}
                        {(index === 0 || index === constants.TOTAL_NO_OF_SECTORS-1) ? (<MaxMinTemperatureIndicator></MaxMinTemperatureIndicator>) :''}
                    </Wrapper>
                );
            })
            }
        </React.Fragment>
    )
}

export default TemperatureScale;