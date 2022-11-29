import React, { FC, memo } from 'react';
import HomeAccountSvg from '../svg/home-account.svg';

export interface IHomeAccountIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeAccountIcon: FC<IHomeAccountIconProps> = memo(props => {
  return <HomeAccountSvg {...props} />;
});
