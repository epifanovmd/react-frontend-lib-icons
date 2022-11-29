import React, { FC, memo } from 'react';
import CookieMinusSvg from '../svg/cookie-minus.svg';

export interface ICookieMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CookieMinusIcon: FC<ICookieMinusIconProps> = memo(props => {
  return <CookieMinusSvg {...props} />;
});
