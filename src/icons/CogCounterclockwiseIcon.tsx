import React, { FC, memo } from 'react';
import CogCounterclockwiseSvg from '../svg/cog-counterclockwise.svg';

export interface ICogCounterclockwiseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CogCounterclockwiseIcon: FC<ICogCounterclockwiseIconProps> = memo(props => {
  return <CogCounterclockwiseSvg {...props} />;
});
