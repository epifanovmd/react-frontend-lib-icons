import React, { FC, memo } from 'react';
import HeartBrokenSvg from '../svg/heart-broken.svg';

export interface IHeartBrokenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeartBrokenIcon: FC<IHeartBrokenIconProps> = memo(props => {
  return <HeartBrokenSvg {...props} />;
});
