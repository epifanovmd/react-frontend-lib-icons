import React, { FC, memo } from 'react';
import BottleTonicSvg from '../svg/bottle-tonic.svg';

export interface IBottleTonicIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BottleTonicIcon: FC<IBottleTonicIconProps> = memo(props => {
  return <BottleTonicSvg {...props} />;
});
