import React, { FC, memo } from 'react';
import BellMinusSvg from '../svg/bell-minus.svg';

export interface IBellMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BellMinusIcon: FC<IBellMinusIconProps> = memo(props => {
  return <BellMinusSvg {...props} />;
});
