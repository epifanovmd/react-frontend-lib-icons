import React, { FC, memo } from 'react';
import CookieRefreshOutlineSvg from '../svg/cookie-refresh-outline.svg';

export interface ICookieRefreshOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CookieRefreshOutlineIcon: FC<ICookieRefreshOutlineIconProps> = memo(props => {
  return <CookieRefreshOutlineSvg {...props} />;
});
