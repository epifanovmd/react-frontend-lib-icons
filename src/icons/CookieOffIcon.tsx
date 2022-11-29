import React, { FC, memo } from 'react';
import CookieOffSvg from '../svg/cookie-off.svg';

export interface ICookieOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CookieOffIcon: FC<ICookieOffIconProps> = memo(props => {
  return <CookieOffSvg {...props} />;
});
