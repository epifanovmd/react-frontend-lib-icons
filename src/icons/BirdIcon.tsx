import React, { FC, memo } from 'react';
import BirdSvg from '../svg/bird.svg';

export interface IBirdIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BirdIcon: FC<IBirdIconProps> = memo(props => {
  return <BirdSvg {...props} />;
});
