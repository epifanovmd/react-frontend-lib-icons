import React, { FC, memo } from 'react';
import HomeSvg from '../svg/home.svg';

export interface IHomeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeIcon: FC<IHomeIconProps> = memo(props => {
  return <HomeSvg {...props} />;
});
