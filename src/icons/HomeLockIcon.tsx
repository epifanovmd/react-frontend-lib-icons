import React, { FC, memo } from 'react';
import HomeLockSvg from '../svg/home-lock.svg';

export interface IHomeLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeLockIcon: FC<IHomeLockIconProps> = memo(props => {
  return <HomeLockSvg {...props} />;
});
