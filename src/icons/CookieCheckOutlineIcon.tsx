import React, { FC, memo } from 'react';
import CookieCheckOutlineSvg from '../svg/cookie-check-outline.svg';

export interface ICookieCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CookieCheckOutlineIcon: FC<ICookieCheckOutlineIconProps> = memo(props => {
  return <CookieCheckOutlineSvg {...props} />;
});
