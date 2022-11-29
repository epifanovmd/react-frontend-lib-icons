import React, { FC, memo } from 'react';
import BarrelOutlineSvg from '../svg/barrel-outline.svg';

export interface IBarrelOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BarrelOutlineIcon: FC<IBarrelOutlineIconProps> = memo(props => {
  return <BarrelOutlineSvg {...props} />;
});
