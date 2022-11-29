import React, { FC, memo } from 'react';
import HomeCircleSvg from '../svg/home-circle.svg';

export interface IHomeCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeCircleIcon: FC<IHomeCircleIconProps> = memo(props => {
  return <HomeCircleSvg {...props} />;
});
