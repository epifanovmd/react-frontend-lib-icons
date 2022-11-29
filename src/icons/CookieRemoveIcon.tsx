import React, { FC, memo } from 'react';
import CookieRemoveSvg from '../svg/cookie-remove.svg';

export interface ICookieRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CookieRemoveIcon: FC<ICookieRemoveIconProps> = memo(props => {
  return <CookieRemoveSvg {...props} />;
});
