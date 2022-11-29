import React, { FC, memo } from 'react';
import HorizontalRotateCounterclockwiseSvg from '../svg/horizontal-rotate-counterclockwise.svg';

export interface IHorizontalRotateCounterclockwiseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HorizontalRotateCounterclockwiseIcon: FC<IHorizontalRotateCounterclockwiseIconProps> = memo(props => {
  return <HorizontalRotateCounterclockwiseSvg {...props} />;
});
