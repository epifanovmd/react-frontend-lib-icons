import React, { FC, memo } from 'react';
import CookieClockSvg from '../svg/cookie-clock.svg';

export interface ICookieClockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CookieClockIcon: FC<ICookieClockIconProps> = memo(props => {
  return <CookieClockSvg {...props} />;
});
