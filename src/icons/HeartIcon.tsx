import React, { FC, memo } from 'react';
import HeartSvg from '../svg/heart.svg';

export interface IHeartIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeartIcon: FC<IHeartIconProps> = memo(props => {
  return <HeartSvg {...props} />;
});
