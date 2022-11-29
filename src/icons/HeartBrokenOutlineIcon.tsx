import React, { FC, memo } from 'react';
import HeartBrokenOutlineSvg from '../svg/heart-broken-outline.svg';

export interface IHeartBrokenOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeartBrokenOutlineIcon: FC<IHeartBrokenOutlineIconProps> = memo(props => {
  return <HeartBrokenOutlineSvg {...props} />;
});
