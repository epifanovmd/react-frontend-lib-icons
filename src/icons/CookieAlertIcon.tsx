import React, { FC, memo } from 'react';
import CookieAlertSvg from '../svg/cookie-alert.svg';

export interface ICookieAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CookieAlertIcon: FC<ICookieAlertIconProps> = memo(props => {
  return <CookieAlertSvg {...props} />;
});
