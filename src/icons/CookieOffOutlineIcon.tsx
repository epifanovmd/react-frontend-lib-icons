import React, { FC, memo } from 'react';
import CookieOffOutlineSvg from '../svg/cookie-off-outline.svg';

export interface ICookieOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CookieOffOutlineIcon: FC<ICookieOffOutlineIconProps> = memo(props => {
  return <CookieOffOutlineSvg {...props} />;
});
