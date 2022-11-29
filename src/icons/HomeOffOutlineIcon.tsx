import React, { FC, memo } from 'react';
import HomeOffOutlineSvg from '../svg/home-off-outline.svg';

export interface IHomeOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeOffOutlineIcon: FC<IHomeOffOutlineIconProps> = memo(props => {
  return <HomeOffOutlineSvg {...props} />;
});
