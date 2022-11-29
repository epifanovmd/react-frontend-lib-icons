import React, { FC, memo } from 'react';
import MagnifyMinusSvg from '../svg/magnify-minus.svg';

export interface IMagnifyMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MagnifyMinusIcon: FC<IMagnifyMinusIconProps> = memo(props => {
  return <MagnifyMinusSvg {...props} />;
});
