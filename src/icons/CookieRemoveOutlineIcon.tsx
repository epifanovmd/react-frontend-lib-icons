import React, { FC, memo } from 'react';
import CookieRemoveOutlineSvg from '../svg/cookie-remove-outline.svg';

export interface ICookieRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CookieRemoveOutlineIcon: FC<ICookieRemoveOutlineIconProps> = memo(props => {
  return <CookieRemoveOutlineSvg {...props} />;
});
