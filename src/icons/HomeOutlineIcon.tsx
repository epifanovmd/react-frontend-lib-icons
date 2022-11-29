import React, { FC, memo } from 'react';
import HomeOutlineSvg from '../svg/home-outline.svg';

export interface IHomeOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeOutlineIcon: FC<IHomeOutlineIconProps> = memo(props => {
  return <HomeOutlineSvg {...props} />;
});
