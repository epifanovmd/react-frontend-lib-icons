import React, { FC, memo } from 'react';
import HomeCircleOutlineSvg from '../svg/home-circle-outline.svg';

export interface IHomeCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeCircleOutlineIcon: FC<IHomeCircleOutlineIconProps> = memo(props => {
  return <HomeCircleOutlineSvg {...props} />;
});
