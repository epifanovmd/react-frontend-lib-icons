import React, { FC, memo } from 'react';
import ThermometerLinesSvg from '../svg/thermometer-lines.svg';

export interface IThermometerLinesIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ThermometerLinesIcon: FC<IThermometerLinesIconProps> = memo(props => {
  return <ThermometerLinesSvg {...props} />;
});
