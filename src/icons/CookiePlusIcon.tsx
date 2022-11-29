import React, { FC, memo } from 'react';
import CookiePlusSvg from '../svg/cookie-plus.svg';

export interface ICookiePlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CookiePlusIcon: FC<ICookiePlusIconProps> = memo(props => {
  return <CookiePlusSvg {...props} />;
});
