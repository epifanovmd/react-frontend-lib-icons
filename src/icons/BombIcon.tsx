import React, { FC, memo } from 'react';
import BombSvg from '../svg/bomb.svg';

export interface IBombIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BombIcon: FC<IBombIconProps> = memo(props => {
  return <BombSvg {...props} />;
});
