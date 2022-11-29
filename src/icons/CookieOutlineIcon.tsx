import React, { FC, memo } from 'react';
import CookieOutlineSvg from '../svg/cookie-outline.svg';

export interface ICookieOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CookieOutlineIcon: FC<ICookieOutlineIconProps> = memo(props => {
  return <CookieOutlineSvg {...props} />;
});
