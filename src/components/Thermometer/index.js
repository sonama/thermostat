import React from 'react';
import PropTypes from 'prop-types';
import {Wrapper,TargetTemperatureIndicatorWrapper} from './Thermometer.style';
import TemperatureScale from '../TemperatureScale';
import * as constants from  '../../constants/index';


const Thermometer = (props) => {
  const targetTemperature = constants.STARTING_ANGLE + (props.targetTemperature-props.minTemperature)*constants.ROTATION_FOR_ONE_DEGREE_ON_THERMOMETER;

  return (
    <Wrapper>
      <TemperatureScale></TemperatureScale>
      <TargetTemperatureIndicatorWrapper calculatedangle={targetTemperature}>
      </TargetTemperatureIndicatorWrapper>
    </Wrapper>
  );
};

Thermometer.propTypes = {
  targetTemperature: PropTypes.number.isRequired,
  minTemperature: PropTypes.number.isRequired,
  maxTemperature: PropTypes.number.isRequired
};


export default Thermometer;