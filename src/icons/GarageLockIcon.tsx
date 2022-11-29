import React, { FC, memo } from 'react';
import GarageLockSvg from '../svg/garage-lock.svg';

export interface IGarageLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GarageLockIcon: FC<IGarageLockIconProps> = memo(props => {
  return <GarageLockSvg {...props} />;
});
