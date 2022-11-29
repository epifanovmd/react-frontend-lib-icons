import React, { FC, memo } from 'react';
import CookieMinusOutlineSvg from '../svg/cookie-minus-outline.svg';

export interface ICookieMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CookieMinusOutlineIcon: FC<ICookieMinusOutlineIconProps> = memo(props => {
  return <CookieMinusOutlineSvg {...props} />;
});
