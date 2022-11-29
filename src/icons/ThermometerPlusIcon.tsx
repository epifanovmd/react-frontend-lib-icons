import React, { FC, memo } from 'react';
import ThermometerPlusSvg from '../svg/thermometer-plus.svg';

export interface IThermometerPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ThermometerPlusIcon: FC<IThermometerPlusIconProps> = memo(props => {
  return <ThermometerPlusSvg {...props} />;
});
