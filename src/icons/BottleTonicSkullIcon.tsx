import React, { FC, memo } from 'react';
import BottleTonicSkullSvg from '../svg/bottle-tonic-skull.svg';

export interface IBottleTonicSkullIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BottleTonicSkullIcon: FC<IBottleTonicSkullIconProps> = memo(props => {
  return <BottleTonicSkullSvg {...props} />;
});
