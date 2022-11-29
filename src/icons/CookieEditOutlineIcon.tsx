import React, { FC, memo } from 'react';
import CookieEditOutlineSvg from '../svg/cookie-edit-outline.svg';

export interface ICookieEditOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CookieEditOutlineIcon: FC<ICookieEditOutlineIconProps> = memo(props => {
  return <CookieEditOutlineSvg {...props} />;
});
