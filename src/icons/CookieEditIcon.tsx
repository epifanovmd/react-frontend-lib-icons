import React, { FC, memo } from 'react';
import CookieEditSvg from '../svg/cookie-edit.svg';

export interface ICookieEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CookieEditIcon: FC<ICookieEditIconProps> = memo(props => {
  return <CookieEditSvg {...props} />;
});
