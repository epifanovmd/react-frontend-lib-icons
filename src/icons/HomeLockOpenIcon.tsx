import React, { FC, memo } from 'react';
import HomeLockOpenSvg from '../svg/home-lock-open.svg';

export interface IHomeLockOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeLockOpenIcon: FC<IHomeLockOpenIconProps> = memo(props => {
  return <HomeLockOpenSvg {...props} />;
});
