import React, { FC, memo } from 'react';
import CookieSvg from '../svg/cookie.svg';

export interface ICookieIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CookieIcon: FC<ICookieIconProps> = memo(props => {
  return <CookieSvg {...props} />;
});
