import React, { FC, memo } from 'react';
import CookieAlertOutlineSvg from '../svg/cookie-alert-outline.svg';

export interface ICookieAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CookieAlertOutlineIcon: FC<ICookieAlertOutlineIconProps> = memo(props => {
  return <CookieAlertOutlineSvg {...props} />;
});
