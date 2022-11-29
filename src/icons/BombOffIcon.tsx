import React, { FC, memo } from 'react';
import BombOffSvg from '../svg/bomb-off.svg';

export interface IBombOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BombOffIcon: FC<IBombOffIconProps> = memo(props => {
  return <BombOffSvg {...props} />;
});
