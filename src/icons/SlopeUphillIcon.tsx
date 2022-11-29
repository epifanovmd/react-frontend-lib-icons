import React, { FC, memo } from 'react';
import SlopeUphillSvg from '../svg/slope-uphill.svg';

export interface ISlopeUphillIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SlopeUphillIcon: FC<ISlopeUphillIconProps> = memo(props => {
  return <SlopeUphillSvg {...props} />;
});
