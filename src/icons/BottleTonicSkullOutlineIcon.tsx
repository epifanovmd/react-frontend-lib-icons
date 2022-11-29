import React, { FC, memo } from 'react';
import BottleTonicSkullOutlineSvg from '../svg/bottle-tonic-skull-outline.svg';

export interface IBottleTonicSkullOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BottleTonicSkullOutlineIcon: FC<IBottleTonicSkullOutlineIconProps> = memo(props => {
  return <BottleTonicSkullOutlineSvg {...props} />;
});
