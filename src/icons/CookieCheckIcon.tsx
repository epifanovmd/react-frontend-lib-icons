import React, { FC, memo } from 'react';
import CookieCheckSvg from '../svg/cookie-check.svg';

export interface ICookieCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CookieCheckIcon: FC<ICookieCheckIconProps> = memo(props => {
  return <CookieCheckSvg {...props} />;
});
