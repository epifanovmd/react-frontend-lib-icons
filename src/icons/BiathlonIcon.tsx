import React, { FC, memo } from 'react';
import BiathlonSvg from '../svg/biathlon.svg';

export interface IBiathlonIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BiathlonIcon: FC<IBiathlonIconProps> = memo(props => {
  return <BiathlonSvg {...props} />;
});
