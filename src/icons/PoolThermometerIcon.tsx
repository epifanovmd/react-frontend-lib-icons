import React, { FC, memo } from 'react';
import PoolThermometerSvg from '../svg/pool-thermometer.svg';

export interface IPoolThermometerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PoolThermometerIcon: FC<IPoolThermometerIconProps> = memo(props => {
  return <PoolThermometerSvg {...props} />;
});
