import React, { FC, memo } from 'react';
import HeadHeartSvg from '../svg/head-heart.svg';

export interface IHeadHeartIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeadHeartIcon: FC<IHeadHeartIconProps> = memo(props => {
  return <HeadHeartSvg {...props} />;
});
