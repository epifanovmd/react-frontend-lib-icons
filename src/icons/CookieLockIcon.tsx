import React, { FC, memo } from 'react';
import CookieLockSvg from '../svg/cookie-lock.svg';

export interface ICookieLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CookieLockIcon: FC<ICookieLockIconProps> = memo(props => {
  return <CookieLockSvg {...props} />;
});
