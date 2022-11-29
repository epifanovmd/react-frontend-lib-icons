import React, { FC, memo } from 'react';
import HomeModernSvg from '../svg/home-modern.svg';

export interface IHomeModernIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeModernIcon: FC<IHomeModernIconProps> = memo(props => {
  return <HomeModernSvg {...props} />;
});
