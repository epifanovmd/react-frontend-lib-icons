import React, { FC, memo } from 'react';
import HeartOffSvg from '../svg/heart-off.svg';

export interface IHeartOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeartOffIcon: FC<IHeartOffIconProps> = memo(props => {
  return <HeartOffSvg {...props} />;
});
