import React, { FC, memo } from 'react';
import BarrelSvg from '../svg/barrel.svg';

export interface IBarrelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BarrelIcon: FC<IBarrelIconProps> = memo(props => {
  return <BarrelSvg {...props} />;
});
