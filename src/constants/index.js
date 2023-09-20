export const  TOTAL_NO_OF_SECTORS= 11; // how many sectors are there in the thermometer in our case Assuming :- it shows 15-25 that makes a total of 11 sectors
export const TOTAL_ROTATION = 294.5; // as we are starting from a sertain angle of a circle I have calculated the rotaion will be of 360-65.5= 294.5 degrees (approximately)
export const SECTOR_INTERVAL = 1;
export const STARTING_ANGLE = 223; // as we have to take a starting point ..I have assumed an angle of 223 as the starting point and hence it shows 15 degrees
export const ROTATION_FOR_ONE_DEGREE_ON_THERMOMETER =  TOTAL_ROTATION/ TOTAL_NO_OF_SECTORS; // how many degrees(angle degrees) it needs to be moved for one degree 
