import React, { FC, memo } from 'react';
import HorizontalRotateClockwiseSvg from '../svg/horizontal-rotate-clockwise.svg';

export interface IHorizontalRotateClockwiseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HorizontalRotateClockwiseIcon: FC<IHorizontalRotateClockwiseIconProps> = memo(props => {
  return <HorizontalRotateClockwiseSvg {...props} />;
});
