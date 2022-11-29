import React, { FC, memo } from 'react';
import ThermometerCheckSvg from '../svg/thermometer-check.svg';

export interface IThermometerCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ThermometerCheckIcon: FC<IThermometerCheckIconProps> = memo(props => {
  return <ThermometerCheckSvg {...props} />;
});
