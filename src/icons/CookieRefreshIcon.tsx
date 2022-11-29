import React, { FC, memo } from 'react';
import CookieRefreshSvg from '../svg/cookie-refresh.svg';

export interface ICookieRefreshIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CookieRefreshIcon: FC<ICookieRefreshIconProps> = memo(props => {
  return <CookieRefreshSvg {...props} />;
});
