import React, { FC, memo } from 'react';
import CookieClockOutlineSvg from '../svg/cookie-clock-outline.svg';

export interface ICookieClockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CookieClockOutlineIcon: FC<ICookieClockOutlineIconProps> = memo(props => {
  return <CookieClockOutlineSvg {...props} />;
});
