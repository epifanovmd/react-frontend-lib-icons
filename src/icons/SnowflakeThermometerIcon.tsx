import React, { FC, memo } from 'react';
import SnowflakeThermometerSvg from '../svg/snowflake-thermometer.svg';

export interface ISnowflakeThermometerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SnowflakeThermometerIcon: FC<ISnowflakeThermometerIconProps> = memo(props => {
  return <SnowflakeThermometerSvg {...props} />;
});
