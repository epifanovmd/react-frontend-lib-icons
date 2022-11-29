import React, { FC, memo } from 'react';
import ThermometerHighSvg from '../svg/thermometer-high.svg';

export interface IThermometerHighIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ThermometerHighIcon: FC<IThermometerHighIconProps> = memo(props => {
  return <ThermometerHighSvg {...props} />;
});
