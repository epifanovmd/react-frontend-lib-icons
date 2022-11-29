import React, { FC, memo } from 'react';
import PenMinusSvg from '../svg/pen-minus.svg';

export interface IPenMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PenMinusIcon: FC<IPenMinusIconProps> = memo(props => {
  return <PenMinusSvg {...props} />;
});
