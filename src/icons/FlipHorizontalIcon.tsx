import React, { FC, memo } from 'react';
import FlipHorizontalSvg from '../svg/flip-horizontal.svg';

export interface IFlipHorizontalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlipHorizontalIcon: FC<IFlipHorizontalIconProps> = memo(props => {
  return <FlipHorizontalSvg {...props} />;
});
