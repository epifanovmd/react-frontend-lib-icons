import React, { FC, memo } from 'react';
import ThermometerOffSvg from '../svg/thermometer-off.svg';

export interface IThermometerOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ThermometerOffIcon: FC<IThermometerOffIconProps> = memo(props => {
  return <ThermometerOffSvg {...props} />;
});
