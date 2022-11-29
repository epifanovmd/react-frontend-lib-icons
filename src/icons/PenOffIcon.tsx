import React, { FC, memo } from 'react';
import PenOffSvg from '../svg/pen-off.svg';

export interface IPenOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PenOffIcon: FC<IPenOffIconProps> = memo(props => {
  return <PenOffSvg {...props} />;
});
