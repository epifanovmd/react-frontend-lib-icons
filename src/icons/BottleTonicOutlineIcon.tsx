import React, { FC, memo } from 'react';
import BottleTonicOutlineSvg from '../svg/bottle-tonic-outline.svg';

export interface IBottleTonicOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BottleTonicOutlineIcon: FC<IBottleTonicOutlineIconProps> = memo(props => {
  return <BottleTonicOutlineSvg {...props} />;
});
