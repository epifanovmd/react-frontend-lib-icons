import React, { FC, memo } from 'react';
import CookieCogSvg from '../svg/cookie-cog.svg';

export interface ICookieCogIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CookieCogIcon: FC<ICookieCogIconProps> = memo(props => {
  return <CookieCogSvg {...props} />;
});
